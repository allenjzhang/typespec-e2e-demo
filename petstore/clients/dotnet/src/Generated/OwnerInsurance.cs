// <auto-generated/>

#nullable disable

using System;
using System.ClientModel;
using System.ClientModel.Primitives;
using System.Threading;
using System.Threading.Tasks;

namespace PetStore
{
    /// <summary></summary>
    public partial class OwnerInsurance
    {
        private readonly Uri _endpoint;

        /// <summary> Initializes a new instance of OwnerInsurance for mocking. </summary>
        protected OwnerInsurance()
        {
        }

        internal OwnerInsurance(ClientPipeline pipeline, Uri endpoint)
        {
            _endpoint = endpoint;
            Pipeline = pipeline;
        }

        /// <summary> The HTTP pipeline for sending and receiving REST requests and responses. </summary>
        public ClientPipeline Pipeline { get; }

        /// <summary>
        /// [Protocol Method] Gets the singleton resource.
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="ownerId"></param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual ClientResult Get(long ownerId, RequestOptions options)
        {
            using PipelineMessage message = CreateGetRequest(ownerId, options);
            return ClientResult.FromResponse(Pipeline.ProcessMessage(message, options));
        }

        /// <summary>
        /// [Protocol Method] Gets the singleton resource.
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="ownerId"></param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual async Task<ClientResult> GetAsync(long ownerId, RequestOptions options)
        {
            using PipelineMessage message = CreateGetRequest(ownerId, options);
            return ClientResult.FromResponse(await Pipeline.ProcessMessageAsync(message, options).ConfigureAwait(false));
        }

        /// <summary> Gets the singleton resource. </summary>
        /// <param name="ownerId"></param>
        /// <param name="cancellationToken"> The cancellation token that can be used to cancel the operation. </param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual ClientResult<Insurance> Get(long ownerId, CancellationToken cancellationToken = default)
        {
            ClientResult result = Get(ownerId, cancellationToken.CanBeCanceled ? new RequestOptions { CancellationToken = cancellationToken } : null);
            return ClientResult.FromValue((Insurance)result, result.GetRawResponse());
        }

        /// <summary> Gets the singleton resource. </summary>
        /// <param name="ownerId"></param>
        /// <param name="cancellationToken"> The cancellation token that can be used to cancel the operation. </param>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual async Task<ClientResult<Insurance>> GetAsync(long ownerId, CancellationToken cancellationToken = default)
        {
            ClientResult result = await GetAsync(ownerId, cancellationToken.CanBeCanceled ? new RequestOptions { CancellationToken = cancellationToken } : null).ConfigureAwait(false);
            return ClientResult.FromValue((Insurance)result, result.GetRawResponse());
        }

        /// <summary>
        /// [Protocol Method] Updates the singleton resource.
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="ownerId"></param>
        /// <param name="content"> The content to send as the body of the request. </param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="content"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual ClientResult Update(long ownerId, BinaryContent content, RequestOptions options = null)
        {
            Argument.AssertNotNull(content, nameof(content));

            using PipelineMessage message = CreateUpdateRequest(ownerId, content, options);
            return ClientResult.FromResponse(Pipeline.ProcessMessage(message, options));
        }

        /// <summary>
        /// [Protocol Method] Updates the singleton resource.
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="ownerId"></param>
        /// <param name="content"> The content to send as the body of the request. </param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="content"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual async Task<ClientResult> UpdateAsync(long ownerId, BinaryContent content, RequestOptions options = null)
        {
            Argument.AssertNotNull(content, nameof(content));

            using PipelineMessage message = CreateUpdateRequest(ownerId, content, options);
            return ClientResult.FromResponse(await Pipeline.ProcessMessageAsync(message, options).ConfigureAwait(false));
        }
    }
}
