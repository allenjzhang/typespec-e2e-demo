// <auto-generated/>

#nullable disable

using System;
using System.ClientModel;
using System.ClientModel.Primitives;
using System.Threading;
using System.Threading.Tasks;
using TypeSpec.Rest.Resource;

namespace PetStore
{
    /// <summary></summary>
    public partial class Checkups
    {
        private readonly Uri _endpoint;

        /// <summary> Initializes a new instance of Checkups for mocking. </summary>
        protected Checkups()
        {
        }

        internal Checkups(ClientPipeline pipeline, Uri endpoint)
        {
            _endpoint = endpoint;
            Pipeline = pipeline;
        }

        /// <summary> The HTTP pipeline for sending and receiving REST requests and responses. </summary>
        public ClientPipeline Pipeline { get; }

        /// <summary>
        /// [Protocol Method] Creates or update an instance of the resource.
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="checkupId"></param>
        /// <param name="content"> The content to send as the body of the request. </param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="content"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual ClientResult CreateOrUpdate(int checkupId, BinaryContent content, RequestOptions options = null)
        {
            Argument.AssertNotNull(content, nameof(content));

            using PipelineMessage message = CreateCreateOrUpdateRequest(checkupId, content, options);
            return ClientResult.FromResponse(Pipeline.ProcessMessage(message, options));
        }

        /// <summary>
        /// [Protocol Method] Creates or update an instance of the resource.
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="checkupId"></param>
        /// <param name="content"> The content to send as the body of the request. </param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="content"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual async Task<ClientResult> CreateOrUpdateAsync(int checkupId, BinaryContent content, RequestOptions options = null)
        {
            Argument.AssertNotNull(content, nameof(content));

            using PipelineMessage message = CreateCreateOrUpdateRequest(checkupId, content, options);
            return ClientResult.FromResponse(await Pipeline.ProcessMessageAsync(message, options).ConfigureAwait(false));
        }

        /// <summary>
        /// [Protocol Method] Lists all instances of the resource.
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual ClientResult List(RequestOptions options)
        {
            using PipelineMessage message = CreateListRequest(options);
            return ClientResult.FromResponse(Pipeline.ProcessMessage(message, options));
        }

        /// <summary>
        /// [Protocol Method] Lists all instances of the resource.
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual async Task<ClientResult> ListAsync(RequestOptions options)
        {
            using PipelineMessage message = CreateListRequest(options);
            return ClientResult.FromResponse(await Pipeline.ProcessMessageAsync(message, options).ConfigureAwait(false));
        }

        /// <summary> Lists all instances of the resource. </summary>
        /// <param name="cancellationToken"> The cancellation token that can be used to cancel the operation. </param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual ClientResult<CheckupCollectionWithNextLink> List(CancellationToken cancellationToken = default)
        {
            ClientResult result = List(cancellationToken.CanBeCanceled ? new RequestOptions { CancellationToken = cancellationToken } : null);
            return ClientResult.FromValue((CheckupCollectionWithNextLink)result, result.GetRawResponse());
        }

        /// <summary> Lists all instances of the resource. </summary>
        /// <param name="cancellationToken"> The cancellation token that can be used to cancel the operation. </param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual async Task<ClientResult<CheckupCollectionWithNextLink>> ListAsync(CancellationToken cancellationToken = default)
        {
            ClientResult result = await ListAsync(cancellationToken.CanBeCanceled ? new RequestOptions { CancellationToken = cancellationToken } : null).ConfigureAwait(false);
            return ClientResult.FromValue((CheckupCollectionWithNextLink)result, result.GetRawResponse());
        }
    }
}
