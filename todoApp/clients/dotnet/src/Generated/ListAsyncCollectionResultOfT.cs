// <auto-generated/>

#nullable disable

using System;
using System.ClientModel;
using System.ClientModel.Primitives;
using System.Collections.Generic;
using System.Threading.Tasks;
using Todo._TodoItems;

namespace Todo
{
    internal partial class ListAsyncCollectionResultOfT : AsyncCollectionResult<TodoItem>
    {
        private readonly TodoItems _client;
        private readonly Uri _nextPage;
        private readonly int? _limit;
        private readonly int? _offset;
        private readonly RequestOptions _options;

        public ListAsyncCollectionResultOfT(TodoItems client, Uri nextPage, int? limit, int? offset, RequestOptions options)
        {
            _client = client;
            _nextPage = nextPage;
            _limit = limit;
            _offset = offset;
            _options = options;
        }

        public override async IAsyncEnumerable<ClientResult> GetRawPagesAsync()
        {
            PipelineMessage message = _client.CreateListRequest(_nextPage, _limit, _offset, _options);
            Uri nextPageUri = null;
            while (true)
            {
                ClientResult result = ClientResult.FromResponse(await _client.Pipeline.ProcessMessageAsync(message, _options).ConfigureAwait(false));
                yield return result;

                nextPageUri = ((TodoPage)result).NextLink;
                if (nextPageUri == null)
                {
                    yield break;
                }
                message = _client.CreateListRequest(nextPageUri, _limit, _offset, _options);
            }
        }

        public override ContinuationToken GetContinuationToken(ClientResult page)
        {
            Uri nextPage = ((TodoPage)page).NextLink;
            if (nextPage != null)
            {
                return ContinuationToken.FromBytes(BinaryData.FromString(nextPage.AbsoluteUri));
            }
            else
            {
                return null;
            }
        }

        protected override async IAsyncEnumerable<TodoItem> GetValuesFromPageAsync(ClientResult page)
        {
            foreach (TodoItem item in ((TodoPage)page).Items)
            {
                yield return item;
                await Task.Yield();
            }
        }
    }
}
