// <auto-generated/>

#nullable disable

using System;
using System.ClientModel;
using System.ClientModel.Primitives;
using System.Threading;

namespace Todo
{
    /// <summary></summary>
    public partial class TodoClient
    {
        private readonly Uri _endpoint;
        /// <summary> A credential used to authenticate to the service. </summary>
        private readonly ApiKeyCredential _keyCredential;
        private const string AuthorizationHeader = "session-id";
        private Users _cachedUsers;
        private TodoItems _cachedTodoItems;

        /// <summary> Initializes a new instance of TodoClient for mocking. </summary>
        protected TodoClient()
        {
        }

        /// <summary> Initializes a new instance of TodoClient. </summary>
        /// <param name="endpoint"> Service endpoint. </param>
        /// <param name="keyCredential"> A credential used to authenticate to the service. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="endpoint"/> or <paramref name="keyCredential"/> is null. </exception>
        public TodoClient(Uri endpoint, ApiKeyCredential keyCredential) : this(endpoint, keyCredential, new TodoClientOptions())
        {
        }

        /// <summary> Initializes a new instance of TodoClient. </summary>
        /// <param name="endpoint"> Service endpoint. </param>
        /// <param name="keyCredential"> A credential used to authenticate to the service. </param>
        /// <param name="options"> The options for configuring the client. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="endpoint"/> or <paramref name="keyCredential"/> is null. </exception>
        public TodoClient(Uri endpoint, ApiKeyCredential keyCredential, TodoClientOptions options)
        {
            Argument.AssertNotNull(endpoint, nameof(endpoint));
            Argument.AssertNotNull(keyCredential, nameof(keyCredential));

            options ??= new TodoClientOptions();

            _endpoint = endpoint;
            _keyCredential = keyCredential;
            Pipeline = ClientPipeline.Create(options, Array.Empty<PipelinePolicy>(), new PipelinePolicy[] { ApiKeyAuthenticationPolicy.CreateHeaderApiKeyPolicy(_keyCredential, AuthorizationHeader) }, Array.Empty<PipelinePolicy>());
        }

        /// <summary> The HTTP pipeline for sending and receiving REST requests and responses. </summary>
        public ClientPipeline Pipeline { get; }

        /// <summary> Initializes a new instance of Users. </summary>
        public virtual Users GetUsersClient()
        {
            return Volatile.Read(ref _cachedUsers) ?? Interlocked.CompareExchange(ref _cachedUsers, new Users(Pipeline, _keyCredential, _endpoint), null) ?? _cachedUsers;
        }

        /// <summary> Initializes a new instance of TodoItems. </summary>
        public virtual TodoItems GetTodoItemsClient()
        {
            return Volatile.Read(ref _cachedTodoItems) ?? Interlocked.CompareExchange(ref _cachedTodoItems, new TodoItems(Pipeline, _keyCredential, _endpoint), null) ?? _cachedTodoItems;
        }
    }
}
