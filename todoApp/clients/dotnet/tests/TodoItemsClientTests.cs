using System.ClientModel;
using System.Globalization;
using System.Net.Http.Headers;
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

        [TearDown]
        public async Task Cleanup()
        {
            try
            {
                await _itemsClient.DeleteAsync(0);
            }
            catch { }
        }

        [Test]
        public async Task CreateForm()
        {
            using MultiPartFormDataBinaryContent content = new MultiPartFormDataBinaryContent();
            var item = new
            {
                title = "Buy milk",
                status = TodoItemStatus.NotStarted.ToString(),
                assignedTo = 1,
                description = "Need to buy milk from the store",
            };
            content.Add(JsonSerializer.Serialize(item), "item", contentType: "application/json");

            var response = await _itemsClient.CreateFormAsync(content, content.ContentType);

            Assert.AreEqual(200, response.GetRawResponse().Status);

            using var document = JsonDocument.Parse(response.GetRawResponse().ContentStream!);
            Assert.IsNotNull(document);
            Assert.AreEqual(0, document.RootElement.GetProperty("id").GetInt64());
            Assert.AreEqual(item.title, document.RootElement.GetProperty("title").GetString());
            Assert.AreEqual(item.status, document.RootElement.GetProperty("status").GetString());
            Assert.AreEqual(item.assignedTo, document.RootElement.GetProperty("assignedTo").GetInt64());
            Assert.AreEqual(item.description, document.RootElement.GetProperty("description").GetString());
            Assert.IsNotNull(document.RootElement.GetProperty("createdAt").GetString());
            Assert.IsNotNull(document.RootElement.GetProperty("updatedAt").GetString());
            Assert.IsNull(document.RootElement.GetProperty("completedAt").GetString());
        }

        [Test]
        public async Task CreateFormWithAttachments()
        {
            using MultiPartFormDataBinaryContent content = new MultiPartFormDataBinaryContent();
            var item = new
            {
                title = "Buy milk",
                status = TodoItemStatus.NotStarted.ToString(),
                assignedTo = 1,
                description = "Need to buy milk from the store",
            };
            content.Add(JsonSerializer.Serialize(item), "item", contentType: "application/json");

            const string filepath = "./image.jpg";
            await using var imageStream = File.OpenRead(filepath);
            content.Add(imageStream, "attachments", "image.jpg", contentType: "application/octet-stream");

            var response = await _itemsClient.CreateFormAsync(content, content.ContentType);
            Assert.AreEqual(200, response.GetRawResponse().Status);

            using var document = JsonDocument.Parse(response.GetRawResponse().ContentStream!);
            Assert.IsNotNull(document);
            Assert.AreEqual(0, document.RootElement.GetProperty("id").GetInt64());
            Assert.AreEqual(item.title, document.RootElement.GetProperty("title").GetString());
            Assert.AreEqual(item.status, document.RootElement.GetProperty("status").GetString());
            Assert.AreEqual(item.assignedTo, document.RootElement.GetProperty("assignedTo").GetInt64());
            Assert.AreEqual(item.description, document.RootElement.GetProperty("description").GetString());
            Assert.IsNotNull(document.RootElement.GetProperty("createdAt").GetString());
            Assert.IsNotNull(document.RootElement.GetProperty("updatedAt").GetString());
            Assert.IsNull(document.RootElement.GetProperty("completedAt").GetString());

            var listResult = await _itemsClient.GetTodoItemsAttachmentsClient().ListAsync(0);

            Assert.AreEqual(1, listResult.Value.Items.Count);
            Assert.AreEqual("image.jpg", listResult.Value.Items[0].Filename);
            var bytes = File.ReadAllBytes(filepath);
            var contentBytes = listResult.Value.Items[0].Contents.ToArray();
            Assert.AreEqual(bytes.Length, contentBytes.Length);
            CollectionAssert.AreEqual(bytes, contentBytes);
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
        public async Task Get()
        {
            // get when not exist we should get a 404
            var exception = Assert.ThrowsAsync<ClientResultException>(async () => await _itemsClient.GetAsync(0));
            Assert.IsNotNull(exception);
            Assert.AreEqual(404, exception.GetRawResponse().Status);

            // create one and then get
            var item = new TodoItem("Buy milk", TodoItemStatus.NotStarted)
            {
                AssignedTo = 1,
                Description = "Need to buy milk from the store",
            };
            var createResponse = await _itemsClient.CreateJsonAsync(item);

            var response = await _itemsClient.GetAsync(createResponse.Value.Id);
            Assert.AreEqual(200, response.GetRawResponse().Status);

            Assert.AreEqual(createResponse.Value.Id, response.Value.Id);
            Assert.AreEqual(item.Title, response.Value.Title);
            Assert.AreEqual(item.Status, response.Value.Status);
            Assert.AreEqual(item.AssignedTo, response.Value.AssignedTo);
            Assert.AreEqual(item.Description, response.Value.Description);
        }

        [Test]
        public async Task Update()
        {
            var item = new TodoItem("Buy milk", TodoItemStatus.NotStarted)
            {
                AssignedTo = 1,
                Description = "Need to buy milk from the store",
            };
            var createResponse = await _itemsClient.CreateJsonAsync(item);
            var patch = new
            {
                title = "Buy milk and eggs",
                status = TodoItemStatus.InProgress.ToString(),
                assignedTo = 2,
                description = "Need to buy milk and eggs from the store",
            };
            var updateResponse = await _itemsClient.UpdateAsync(createResponse.Value.Id, BinaryContent.Create(BinaryData.FromObjectAsJson(patch)));
            Assert.AreEqual(200, updateResponse.GetRawResponse().Status);

            using var document = JsonDocument.Parse(updateResponse.GetRawResponse().ContentStream!);
            Assert.AreEqual(patch.title, document.RootElement.GetProperty("title").GetString());
            Assert.AreEqual(patch.status, document.RootElement.GetProperty("status").GetString());
            Assert.AreEqual(patch.assignedTo, document.RootElement.GetProperty("assignedTo").GetInt64());
            Assert.AreEqual(patch.description, document.RootElement.GetProperty("description").GetString());
        }

        [Test]
        public async Task Delete()
        {
            // delete when it does not exist should get a 404
            var exception = Assert.ThrowsAsync<ClientResultException>(async () => await _itemsClient.DeleteAsync(0));
            Assert.IsNotNull(exception);
            Assert.AreEqual(404, exception.GetRawResponse().Status);

            // create one and then delete
            var item = new TodoItem("Buy milk", TodoItemStatus.NotStarted)
            {
                AssignedTo = 1,
                Description = "Need to buy milk from the store",
            };
            var createResponse = await _itemsClient.CreateJsonAsync(item);

            var response = await _itemsClient.DeleteAsync(createResponse.Value.Id);
            Assert.AreEqual(204, response.GetRawResponse().Status);
        }

        [Test]
        public async Task List()
        {
            var response = await _itemsClient.ListAsync();
            Assert.AreEqual(200, response.GetRawResponse().Status);
            Assert.AreEqual(0, response.Value.Items.Count);
            var item = new TodoItem("Buy milk", TodoItemStatus.NotStarted)
            {
                AssignedTo = 1,
                Description = "Need to buy milk from the store",
            };
            await _itemsClient.CreateJsonAsync(item);
            response = await _itemsClient.ListAsync();
            Assert.AreEqual(200, response.GetRawResponse().Status);
            Assert.AreEqual(1, response.Value.Items.Count);
        }

        internal partial class MultiPartFormDataBinaryContent : BinaryContent
        {
            private readonly MultipartFormDataContent _multipartContent;
            private static readonly Random _random = new Random();
            private static readonly char[] _boundaryValues = "0123456789=ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".ToCharArray();

            public MultiPartFormDataBinaryContent()
            {
                _multipartContent = new MultipartFormDataContent(CreateBoundary());
            }

            public string? ContentType
            {
                get
                {
                    return _multipartContent.Headers.ContentType?.ToString();
                }
            }

            internal HttpContent HttpContent => _multipartContent;

            private static string CreateBoundary()
            {
                Span<char> chars = new char[70];
                byte[] random = new byte[70];
                _random.NextBytes(random);
                int mask = 255 >> 2;
                int i = 0;
                for (; i < 70; i++)
                {
                    chars[i] = _boundaryValues[random[i] & mask];
                }
                return chars.ToString();
            }

            public void Add(string content, string name, string? filename = default, string? contentType = default)
            {
                ArgumentNullException.ThrowIfNull(content, nameof(content));
                ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

                Add(new StringContent(content), name, filename, contentType);
            }

            public void Add(int content, string name, string? filename = default, string? contentType = default)
            {
                ArgumentNullException.ThrowIfNull(content, nameof(content));
                ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

                string value = content.ToString("G", CultureInfo.InvariantCulture);
                Add(new StringContent(value), name, filename, contentType);
            }

            public void Add(long content, string name, string? filename = default, string? contentType = default)
            {
                ArgumentNullException.ThrowIfNull(content, nameof(content));
                ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

                string value = content.ToString("G", CultureInfo.InvariantCulture);
                Add(new StringContent(value), name, filename, contentType);
            }

            public void Add(float content, string name, string? filename = default, string? contentType = default)
            {
                ArgumentNullException.ThrowIfNull(content, nameof(content));
                ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

                string value = content.ToString("G", CultureInfo.InvariantCulture);
                Add(new StringContent(value), name, filename, contentType);
            }

            public void Add(double content, string name, string? filename = default, string? contentType = default)
            {
                ArgumentNullException.ThrowIfNull(content, nameof(content));
                ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

                string value = content.ToString("G", CultureInfo.InvariantCulture);
                Add(new StringContent(value), name, filename, contentType);
            }

            public void Add(decimal content, string name, string? filename = default, string? contentType = default)
            {
                ArgumentNullException.ThrowIfNull(content, nameof(content));
                ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

                string value = content.ToString("G", CultureInfo.InvariantCulture);
                Add(new StringContent(value), name, filename, contentType);
            }

            public void Add(bool content, string name, string? filename = default, string? contentType = default)
            {
                ArgumentNullException.ThrowIfNull(content, nameof(content));
                ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

                string value = content ? "true" : "false";
                Add(new StringContent(value), name, filename, contentType);
            }

            public void Add(Stream content, string name, string? filename = default, string? contentType = default)
            {
                ArgumentNullException.ThrowIfNull(content, nameof(content));
                ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

                Add(new StreamContent(content), name, filename, contentType);
            }

            public void Add(byte[] content, string name, string? filename = default, string? contentType = default)
            {
                ArgumentNullException.ThrowIfNull(content, nameof(content));
                ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

                Add(new ByteArrayContent(content), name, filename, contentType);
            }

            public void Add(BinaryData content, string name, string? filename = default, string? contentType = default)
            {
                ArgumentNullException.ThrowIfNull(content, nameof(content));
                ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

                Add(new ByteArrayContent(content.ToArray()), name, filename, contentType);
            }

            private void Add(HttpContent content, string name, string? filename, string? contentType)
            {
                if (contentType != null)
                {
                    ArgumentNullException.ThrowIfNullOrEmpty(contentType, nameof(contentType));
                    AddContentTypeHeader(content, contentType);
                }
                if (filename != null)
                {
                    ArgumentNullException.ThrowIfNullOrEmpty(filename, nameof(filename));
                    _multipartContent.Add(content, name, filename);
                }
                else
                {
                    _multipartContent.Add(content, name);
                }
            }

            public static void AddContentTypeHeader(HttpContent content, string contentType)
            {
                MediaTypeHeaderValue header = new MediaTypeHeaderValue(contentType);
                content.Headers.ContentType = header;
            }

            public override bool TryComputeLength(out long length)
            {
                if (_multipartContent.Headers.ContentLength is long contentLength)
                {
                    length = contentLength;
                    return true;
                }
                length = 0;
                return false;
            }

            public override void WriteTo(Stream stream, CancellationToken cancellationToken = default)
            {
#if NET6_0_OR_GREATER
                _multipartContent.CopyTo(stream, default, cancellationToken);
#else
            _multipartContent.CopyToAsync(stream).GetAwaiter().GetResult();
#endif
            }

            public override async Task WriteToAsync(Stream stream, CancellationToken cancellationToken = default)
            {
#if NET6_0_OR_GREATER
                await _multipartContent.CopyToAsync(stream).ConfigureAwait(false);
#else
            await _multipartContent.CopyToAsync(stream).ConfigureAwait(false);
#endif
            }

            public override void Dispose()
            {
                _multipartContent.Dispose();
            }
        }
    }
}