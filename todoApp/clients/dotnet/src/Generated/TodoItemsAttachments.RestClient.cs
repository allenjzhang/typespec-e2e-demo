// <auto-generated/>

#nullable disable

using System.ClientModel;
using System.ClientModel.Primitives;
using Todo;

namespace Todo._TodoItems.Attachments
{
    /// <summary></summary>
    public partial class TodoItemsAttachments
    {
        private static PipelineMessageClassifier _pipelineMessageClassifier200;
        private static PipelineMessageClassifier _pipelineMessageClassifier204;

        private static PipelineMessageClassifier PipelineMessageClassifier200 => _pipelineMessageClassifier200 = PipelineMessageClassifier.Create(stackalloc ushort[] { 200 });

        private static PipelineMessageClassifier PipelineMessageClassifier204 => _pipelineMessageClassifier204 = PipelineMessageClassifier.Create(stackalloc ushort[] { 204 });

        internal PipelineMessage CreateListRequest(long itemId, RequestOptions options)
        {
            PipelineMessage message = Pipeline.CreateMessage();
            message.ResponseClassifier = PipelineMessageClassifier200;
            PipelineRequest request = message.Request;
            request.Method = "GET";
            ClientUriBuilder uri = new ClientUriBuilder();
            uri.Reset(_endpoint);
            uri.AppendPath("/items/", false);
            uri.AppendPath(itemId.ToString(), true);
            uri.AppendPath("/attachments", false);
            request.Uri = uri.ToUri();
            request.Headers.Set("Accept", "application/json");
            message.Apply(options);
            return message;
        }

        internal PipelineMessage CreateCreateJsonAttachmentRequest(long itemId, BinaryContent content, RequestOptions options)
        {
            PipelineMessage message = Pipeline.CreateMessage();
            message.ResponseClassifier = PipelineMessageClassifier204;
            PipelineRequest request = message.Request;
            request.Method = "POST";
            ClientUriBuilder uri = new ClientUriBuilder();
            uri.Reset(_endpoint);
            uri.AppendPath("/items/", false);
            uri.AppendPath(itemId.ToString(), true);
            uri.AppendPath("/attachments", false);
            request.Uri = uri.ToUri();
            request.Headers.Set("Content-Type", "application/json");
            request.Headers.Set("Accept", "application/json");
            request.Content = content;
            message.Apply(options);
            return message;
        }

        internal PipelineMessage CreateCreateFileAttachmentRequest(long itemId, BinaryContent content, string contentType, RequestOptions options)
        {
            PipelineMessage message = Pipeline.CreateMessage();
            message.ResponseClassifier = PipelineMessageClassifier204;
            PipelineRequest request = message.Request;
            request.Method = "POST";
            ClientUriBuilder uri = new ClientUriBuilder();
            uri.Reset(_endpoint);
            uri.AppendPath("/items/", false);
            uri.AppendPath(itemId.ToString(), true);
            uri.AppendPath("/attachments", false);
            request.Uri = uri.ToUri();
            request.Headers.Set("Content-Type", contentType);
            request.Headers.Set("Accept", "application/json");
            request.Content = content;
            message.Apply(options);
            return message;
        }
    }
}
