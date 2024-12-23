﻿using System.ClientModel;
using System.Globalization;
using System.Net.Http.Headers;

#nullable disable

namespace Todo.Tests
{
    internal class MultipartFormDataRequestContent : BinaryContent
    {
        private readonly MultipartFormDataContent _multipartContent;
        private static readonly Random _random = new Random();
        private static readonly char[] _boundaryValues = "0123456789=ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".ToCharArray();

        public MultipartFormDataRequestContent()
        {
            _multipartContent = new MultipartFormDataContent(CreateBoundary());
        }

        public string ContentType
        {
            get
            {
                return _multipartContent.Headers.ContentType.ToString();
            }
        }

        internal HttpContent HttpContent => _multipartContent;

        private static string CreateBoundary()
        {
            Span<char> chars = new char[70];
            byte[] random = new byte[70];
            _random.NextBytes(random);
            int mask = 255 >> 2;
            for (int i = 0; i < 70; i++)
            {
                chars[i] = _boundaryValues[random[i] & mask];
            }
            return chars.ToString();
        }

        public void Add(string content, string name, string filename = null, string contentType = null)
        {
            ArgumentNullException.ThrowIfNull(content, nameof(content));
            ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

            Add(new StringContent(content), name, filename, contentType);
        }

        public void Add(int content, string name, string filename = null, string contentType = null)
        {
            ArgumentNullException.ThrowIfNull(content, nameof(content));
            ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

            string value = content.ToString("G", CultureInfo.InvariantCulture);
            Add(new StringContent(value), name, filename, contentType);
        }

        public void Add(long content, string name, string filename = null, string contentType = null)
        {
            ArgumentNullException.ThrowIfNull(content, nameof(content));
            ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

            string value = content.ToString("G", CultureInfo.InvariantCulture);
            Add(new StringContent(value), name, filename, contentType);
        }

        public void Add(float content, string name, string filename = null, string contentType = null)
        {
            ArgumentNullException.ThrowIfNull(content, nameof(content));
            ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

            string value = content.ToString("G", CultureInfo.InvariantCulture);
            Add(new StringContent(value), name, filename, contentType);
        }

        public void Add(double content, string name, string filename = null, string contentType = null)
        {
            ArgumentNullException.ThrowIfNull(content, nameof(content));
            ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

            string value = content.ToString("G", CultureInfo.InvariantCulture);
            Add(new StringContent(value), name, filename, contentType);
        }

        public void Add(decimal content, string name, string filename = null, string contentType = null)
        {
            ArgumentNullException.ThrowIfNull(content, nameof(content));
            ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

            string value = content.ToString("G", CultureInfo.InvariantCulture);
            Add(new StringContent(value), name, filename, contentType);
        }

        public void Add(bool content, string name, string filename = null, string contentType = null)
        {
            ArgumentNullException.ThrowIfNull(content, nameof(content));
            ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

            string value = content ? "true" : "false";
            Add(new StringContent(value), name, filename, contentType);
        }

        public void Add(Stream content, string name, string filename = null, string contentType = null)
        {
            ArgumentNullException.ThrowIfNull(content, nameof(content));
            ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

            Add(new StreamContent(content), name, filename, contentType);
        }

        public void Add(byte[] content, string name, string filename = null, string contentType = null)
        {
            ArgumentNullException.ThrowIfNull(content, nameof(content));
            ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

            Add(new ByteArrayContent(content), name, filename, contentType);
        }

        public void Add(BinaryData content, string name, string filename = null, string contentType = null)
        {
            ArgumentNullException.ThrowIfNull(content, nameof(content));
            ArgumentNullException.ThrowIfNullOrEmpty(name, nameof(name));

            Add(new ByteArrayContent(content.ToArray()), name, filename, contentType);
        }

        private void Add(HttpContent content, string name, string filename, string contentType)
        {
            if (filename != null)
            {
                ArgumentNullException.ThrowIfNullOrEmpty(filename, nameof(filename));
                AddFilenameHeader(content, name, filename);
            }
            if (contentType != null)
            {
                ArgumentNullException.ThrowIfNullOrEmpty(contentType, nameof(contentType));
                AddContentTypeHeader(content, contentType);
            }
            _multipartContent.Add(content, name);
        }

        public static void AddFilenameHeader(HttpContent content, string name, string filename)
        {
            ContentDispositionHeaderValue header = new ContentDispositionHeaderValue("form-data") { Name = name, FileName = filename };
            content.Headers.ContentDisposition = header;
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
#pragma warning disable AZC0107
            _multipartContent.CopyToAsync(stream).EnsureCompleted();
#pragma warning restore AZC0107
#endif
        }

        public override async Task WriteToAsync(Stream stream, CancellationToken cancellationToken = default)
        {
#if NET6_0_OR_GREATER
            await _multipartContent.CopyToAsync(stream, cancellationToken).ConfigureAwait(false);
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
