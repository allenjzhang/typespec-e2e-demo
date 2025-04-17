// <auto-generated/>

#nullable disable

using System;
using System.ClientModel;
using System.ClientModel.Primitives;
using System.Collections.Generic;
using System.Text.Json;

namespace Todo
{
    /// <summary></summary>
    internal partial class Standard4XXResponse : IJsonModel<Standard4XXResponse>
    {
        internal Standard4XXResponse()
        {
        }

        void IJsonModel<Standard4XXResponse>.Write(Utf8JsonWriter writer, ModelReaderWriterOptions options)
        {
            writer.WriteStartObject();
            JsonModelWriteCore(writer, options);
            writer.WriteEndObject();
        }

        /// <param name="writer"> The JSON writer. </param>
        /// <param name="options"> The client options for reading and writing models. </param>
        protected override void JsonModelWriteCore(Utf8JsonWriter writer, ModelReaderWriterOptions options)
        {
            string format = options.Format == "W" ? ((IPersistableModel<Standard4XXResponse>)this).GetFormatFromOptions(options) : options.Format;
            if (format != "J")
            {
                throw new FormatException($"The model {nameof(Standard4XXResponse)} does not support writing '{format}' format.");
            }
            base.JsonModelWriteCore(writer, options);
        }

        Standard4XXResponse IJsonModel<Standard4XXResponse>.Create(ref Utf8JsonReader reader, ModelReaderWriterOptions options) => (Standard4XXResponse)JsonModelCreateCore(ref reader, options);

        /// <param name="reader"> The JSON reader. </param>
        /// <param name="options"> The client options for reading and writing models. </param>
        protected override ApiError JsonModelCreateCore(ref Utf8JsonReader reader, ModelReaderWriterOptions options)
        {
            string format = options.Format == "W" ? ((IPersistableModel<Standard4XXResponse>)this).GetFormatFromOptions(options) : options.Format;
            if (format != "J")
            {
                throw new FormatException($"The model {nameof(Standard4XXResponse)} does not support reading '{format}' format.");
            }
            using JsonDocument document = JsonDocument.ParseValue(ref reader);
            return DeserializeStandard4XXResponse(document.RootElement, options);
        }

        internal static Standard4XXResponse DeserializeStandard4XXResponse(JsonElement element, ModelReaderWriterOptions options)
        {
            if (element.ValueKind == JsonValueKind.Null)
            {
                return null;
            }
            string code = default;
            string message = default;
            IDictionary<string, BinaryData> additionalBinaryDataProperties = new ChangeTrackingDictionary<string, BinaryData>();
            foreach (var prop in element.EnumerateObject())
            {
                if (prop.NameEquals("code"u8))
                {
                    code = prop.Value.GetString();
                    continue;
                }
                if (prop.NameEquals("message"u8))
                {
                    message = prop.Value.GetString();
                    continue;
                }
                if (options.Format != "W")
                {
                    additionalBinaryDataProperties.Add(prop.Name, BinaryData.FromString(prop.Value.GetRawText()));
                }
            }
            return new Standard4XXResponse(code, message, additionalBinaryDataProperties);
        }

        BinaryData IPersistableModel<Standard4XXResponse>.Write(ModelReaderWriterOptions options) => PersistableModelWriteCore(options);

        /// <param name="options"> The client options for reading and writing models. </param>
        protected override BinaryData PersistableModelWriteCore(ModelReaderWriterOptions options)
        {
            string format = options.Format == "W" ? ((IPersistableModel<Standard4XXResponse>)this).GetFormatFromOptions(options) : options.Format;
            switch (format)
            {
                case "J":
                    return ModelReaderWriter.Write(this, options);
                default:
                    throw new FormatException($"The model {nameof(Standard4XXResponse)} does not support writing '{options.Format}' format.");
            }
        }

        Standard4XXResponse IPersistableModel<Standard4XXResponse>.Create(BinaryData data, ModelReaderWriterOptions options) => (Standard4XXResponse)PersistableModelCreateCore(data, options);

        /// <param name="data"> The data to parse. </param>
        /// <param name="options"> The client options for reading and writing models. </param>
        protected override ApiError PersistableModelCreateCore(BinaryData data, ModelReaderWriterOptions options)
        {
            string format = options.Format == "W" ? ((IPersistableModel<Standard4XXResponse>)this).GetFormatFromOptions(options) : options.Format;
            switch (format)
            {
                case "J":
                    using (JsonDocument document = JsonDocument.Parse(data))
                    {
                        return DeserializeStandard4XXResponse(document.RootElement, options);
                    }
                default:
                    throw new FormatException($"The model {nameof(Standard4XXResponse)} does not support reading '{options.Format}' format.");
            }
        }

        string IPersistableModel<Standard4XXResponse>.GetFormatFromOptions(ModelReaderWriterOptions options) => "J";

        /// <param name="standard4XXResponse"> The <see cref="Standard4XXResponse"/> to serialize into <see cref="BinaryContent"/>. </param>
        public static implicit operator BinaryContent(Standard4XXResponse standard4XXResponse)
        {
            if (standard4XXResponse == null)
            {
                return null;
            }
            return BinaryContent.Create(standard4XXResponse, ModelSerializationExtensions.WireOptions);
        }

        /// <param name="result"> The <see cref="ClientResult"/> to deserialize the <see cref="Standard4XXResponse"/> from. </param>
        public static explicit operator Standard4XXResponse(ClientResult result)
        {
            using PipelineResponse response = result.GetRawResponse();
            using JsonDocument document = JsonDocument.Parse(response.Content);
            return DeserializeStandard4XXResponse(document.RootElement, ModelSerializationExtensions.WireOptions);
        }
    }
}
