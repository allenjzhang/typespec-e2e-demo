using System.ClientModel;
using System.ClientModel.Primitives;
using System.Text.Json;
using Todo.Models;

namespace Todo.Tests
{
    public class TodoItemsClientTests
    {
        private TodoItems _itemsClient;

        [OneTimeSetUp]
        public void Setup()
        {
            var cred = new ApiKeyCredential("stub");
            _itemsClient = new TodoClient(new Uri("http://localhost:5244"), cred).GetTodoItemsClient();
        }

        [Test]
        public async Task CreateJson()
        {
            var item = new TodoItem("Buy milk", TodoItemStatus.NotStarted)
            {
                AssignedTo = 1,
                Description = "Need to buy milk from the store",
            };
            var response = await _itemsClient.CreateJsonAsync(item);

            Assert.AreEqual(200, response.GetRawResponse().Status);
            var result = response.Value;

            Assert.AreEqual(0, result.Id);
            Assert.AreEqual(item.Title, result.Title);
            Assert.AreEqual(item.Status, result.Status);
            Assert.IsNotNull(result.CreatedAt);
            Assert.IsNotNull(result.UpdatedAt);
            Assert.IsNull(result.CompletedAt);
        }

        [Test]
        public async Task CreateForm()
        {
            var item = new TodoItem("Buy milk", TodoItemStatus.NotStarted)
            {
                AssignedTo = 1,
                Description = "Need to buy milk from the store",
            };
            var response = await _itemsClient.CreateFormAsync(new TodoItemMultipartRequest(item).ToMultipartRequestContent(), "multipart/form-data");

            Assert.AreEqual(200, response.GetRawResponse().Status);
        }
    }

    internal class TodoItemMultipartRequest
    {
        public TodoItemMultipartRequest(TodoItem item)
        {
            Item = item;
            Attachments = new List<MultipartFile>();
        }

        public TodoItem Item { get; set; }
        public IList<MultipartFile> Attachments { get; }

        private readonly ModelReaderWriterOptions _wire = new ModelReaderWriterOptions("W");

        internal virtual MultipartFormDataRequestContent ToMultipartRequestContent()
        {
            MultipartFormDataRequestContent content = new MultipartFormDataRequestContent();
            content.Add(ModelReaderWriter.Write(Item, _wire), "item");
            foreach (var item in Attachments)
            {
                content.Add(ModelReaderWriter.Write(item, _wire), "attachments");
            }
            return content;
        }
    }

    internal class MultipartFile : IJsonModel<MultipartFile>
    {
        public string? ContentType { get; set; }
        public string? Filename { get; set; }
        public BinaryData? Contents { get; set; }

        MultipartFile IJsonModel<MultipartFile>.Create(ref Utf8JsonReader reader, ModelReaderWriterOptions options)
        {
            throw new NotImplementedException();
        }

        MultipartFile IPersistableModel<MultipartFile>.Create(BinaryData data, ModelReaderWriterOptions options)
        {
            throw new NotImplementedException();
        }

        string IPersistableModel<MultipartFile>.GetFormatFromOptions(ModelReaderWriterOptions options) => "J";

        void IJsonModel<MultipartFile>.Write(Utf8JsonWriter writer, ModelReaderWriterOptions options)
        {
            if (Optional.IsDefined(ContentType))
            {
                writer.WritePropertyName("contentType"u8);
                writer.WriteStringValue(ContentType);
            }
            if (Optional.IsDefined(Filename))
            {
                writer.WritePropertyName("filename"u8);
                writer.WriteStringValue(Filename);
            }
            writer.WritePropertyName("contents"u8);
            writer.WriteBase64StringValue(Contents.ToArray());
        }

        BinaryData IPersistableModel<MultipartFile>.Write(ModelReaderWriterOptions options)
        {
            var format = options.Format == "W" ? ((IPersistableModel<MultipartFile>)this).GetFormatFromOptions(options) : options.Format;

            switch (format)
            {
                case "J":
                    return ModelReaderWriter.Write(this, options);
                default:
                    throw new FormatException($"The model {nameof(MultipartFile)} does not support writing '{options.Format}' format.");
            }
        }
    }

    internal static class Optional
    {
        public static bool IsDefined<T>(T? value) where T : class
        {
            return value != null;
        }

        public static bool IsDefined<T>(T? value) where T : struct
        {
            return value.HasValue;
        }
    }
}