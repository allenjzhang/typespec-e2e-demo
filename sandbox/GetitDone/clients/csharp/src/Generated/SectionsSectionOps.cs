// <auto-generated/>

#nullable disable

using System;
using System.ClientModel;
using System.ClientModel.Primitives;
using System.Threading;
using System.Threading.Tasks;
using Getitdone.Models;

namespace Getitdone
{
    /// <summary></summary>
    public partial class SectionsSectionOps
    {
        private readonly Uri _endpoint;

        /// <summary> Initializes a new instance of SectionsSectionOps for mocking. </summary>
        protected SectionsSectionOps()
        {
        }

        internal SectionsSectionOps(ClientPipeline pipeline, Uri endpoint)
        {
            _endpoint = endpoint;
            Pipeline = pipeline;
        }

        /// <summary> The HTTP pipeline for sending and receiving REST requests and responses. </summary>
        public ClientPipeline Pipeline { get; }

        /// <summary>
        /// [Protocol Method] getSection
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="section_id"></param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="section_id"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual ClientResult GetSection(string sectionId, RequestOptions options)
        {
            Argument.AssertNotNull(sectionId, nameof(sectionId));

            using PipelineMessage message = CreateGetSectionRequest(sectionId, options);
            return ClientResult.FromResponse(Pipeline.ProcessMessage(message, options));
        }

        /// <summary>
        /// [Protocol Method] getSection
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="section_id"></param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="section_id"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual async Task<ClientResult> GetSectionAsync(string sectionId, RequestOptions options)
        {
            Argument.AssertNotNull(sectionId, nameof(sectionId));

            using PipelineMessage message = CreateGetSectionRequest(sectionId, options);
            return ClientResult.FromResponse(await Pipeline.ProcessMessageAsync(message, options).ConfigureAwait(false));
        }

        /// <summary> getSection. </summary>
        /// <param name="section_id"></param>
        /// <param name="cancellationToken"> The cancellation token that can be used to cancel the operation. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="section_id"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual ClientResult<Section> GetSection(string sectionId, CancellationToken cancellationToken = default)
        {
            Argument.AssertNotNull(sectionId, nameof(sectionId));

            ClientResult result = GetSection(sectionId, cancellationToken.CanBeCanceled ? new RequestOptions { CancellationToken = cancellationToken } : null);
            return ClientResult.FromValue((Section)result, result.GetRawResponse());
        }

        /// <summary> getSection. </summary>
        /// <param name="section_id"></param>
        /// <param name="cancellationToken"> The cancellation token that can be used to cancel the operation. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="section_id"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual async Task<ClientResult<Section>> GetSectionAsync(string sectionId, CancellationToken cancellationToken = default)
        {
            Argument.AssertNotNull(sectionId, nameof(sectionId));

            ClientResult result = await GetSectionAsync(sectionId, cancellationToken.CanBeCanceled ? new RequestOptions { CancellationToken = cancellationToken } : null).ConfigureAwait(false);
            return ClientResult.FromValue((Section)result, result.GetRawResponse());
        }

        /// <summary>
        /// [Protocol Method] updateSection
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="section_id"></param>
        /// <param name="content"> The content to send as the body of the request. </param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="section_id"/> or <paramref name="content"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual ClientResult UpdateSection(string sectionId, BinaryContent content, RequestOptions options = null)
        {
            Argument.AssertNotNull(sectionId, nameof(sectionId));
            Argument.AssertNotNull(content, nameof(content));

            using PipelineMessage message = CreateUpdateSectionRequest(sectionId, content, options);
            return ClientResult.FromResponse(Pipeline.ProcessMessage(message, options));
        }

        /// <summary>
        /// [Protocol Method] updateSection
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="section_id"></param>
        /// <param name="content"> The content to send as the body of the request. </param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="section_id"/> or <paramref name="content"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual async Task<ClientResult> UpdateSectionAsync(string sectionId, BinaryContent content, RequestOptions options = null)
        {
            Argument.AssertNotNull(sectionId, nameof(sectionId));
            Argument.AssertNotNull(content, nameof(content));

            using PipelineMessage message = CreateUpdateSectionRequest(sectionId, content, options);
            return ClientResult.FromResponse(await Pipeline.ProcessMessageAsync(message, options).ConfigureAwait(false));
        }

        /// <summary> updateSection. </summary>
        /// <param name="section_id"></param>
        /// <param name="body"></param>
        /// <param name="cancellationToken"> The cancellation token that can be used to cancel the operation. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="section_id"/> or <paramref name="body"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual ClientResult<Section> UpdateSection(string sectionId, UpdateSectionRequest body, CancellationToken cancellationToken = default)
        {
            Argument.AssertNotNull(sectionId, nameof(sectionId));
            Argument.AssertNotNull(body, nameof(body));

            ClientResult result = UpdateSection(sectionId, body, cancellationToken.CanBeCanceled ? new RequestOptions { CancellationToken = cancellationToken } : null);
            return ClientResult.FromValue((Section)result, result.GetRawResponse());
        }

        /// <summary> updateSection. </summary>
        /// <param name="section_id"></param>
        /// <param name="body"></param>
        /// <param name="cancellationToken"> The cancellation token that can be used to cancel the operation. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="section_id"/> or <paramref name="body"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual async Task<ClientResult<Section>> UpdateSectionAsync(string sectionId, UpdateSectionRequest body, CancellationToken cancellationToken = default)
        {
            Argument.AssertNotNull(sectionId, nameof(sectionId));
            Argument.AssertNotNull(body, nameof(body));

            ClientResult result = await UpdateSectionAsync(sectionId, body, cancellationToken.CanBeCanceled ? new RequestOptions { CancellationToken = cancellationToken } : null).ConfigureAwait(false);
            return ClientResult.FromValue((Section)result, result.GetRawResponse());
        }

        /// <summary>
        /// [Protocol Method] deleteSection
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="section_id"></param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="section_id"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual ClientResult DeleteSection(string sectionId, RequestOptions options)
        {
            Argument.AssertNotNull(sectionId, nameof(sectionId));

            using PipelineMessage message = CreateDeleteSectionRequest(sectionId, options);
            return ClientResult.FromResponse(Pipeline.ProcessMessage(message, options));
        }

        /// <summary>
        /// [Protocol Method] deleteSection
        /// <list type="bullet">
        /// <item>
        /// <description> This <see href="https://aka.ms/azsdk/net/protocol-methods">protocol method</see> allows explicit creation of the request and processing of the response for advanced scenarios. </description>
        /// </item>
        /// </list>
        /// </summary>
        /// <param name="section_id"></param>
        /// <param name="options"> The request options, which can override default behaviors of the client pipeline on a per-call basis. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="section_id"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        /// <returns> The response returned from the service. </returns>
        public virtual async Task<ClientResult> DeleteSectionAsync(string sectionId, RequestOptions options)
        {
            Argument.AssertNotNull(sectionId, nameof(sectionId));

            using PipelineMessage message = CreateDeleteSectionRequest(sectionId, options);
            return ClientResult.FromResponse(await Pipeline.ProcessMessageAsync(message, options).ConfigureAwait(false));
        }

        /// <summary> deleteSection. </summary>
        /// <param name="section_id"></param>
        /// <param name="cancellationToken"> The cancellation token that can be used to cancel the operation. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="section_id"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual ClientResult DeleteSection(string sectionId, CancellationToken cancellationToken = default)
        {
            Argument.AssertNotNull(sectionId, nameof(sectionId));

            return DeleteSection(sectionId, cancellationToken.CanBeCanceled ? new RequestOptions { CancellationToken = cancellationToken } : null);
        }

        /// <summary> deleteSection. </summary>
        /// <param name="section_id"></param>
        /// <param name="cancellationToken"> The cancellation token that can be used to cancel the operation. </param>
        /// <exception cref="ArgumentNullException"> <paramref name="section_id"/> is null. </exception>
        /// <exception cref="ClientResultException"> Service returned a non-success status code. </exception>
        public virtual async Task<ClientResult> DeleteSectionAsync(string sectionId, CancellationToken cancellationToken = default)
        {
            Argument.AssertNotNull(sectionId, nameof(sectionId));

            return await DeleteSectionAsync(sectionId, cancellationToken.CanBeCanceled ? new RequestOptions { CancellationToken = cancellationToken } : null).ConfigureAwait(false);
        }
    }
}
