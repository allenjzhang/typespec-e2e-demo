// <auto-generated/>

#nullable disable

using System;
using System.ClientModel;
using System.ClientModel.Primitives;
using System.Collections.Generic;
using System.Text.Json;
using Todo;

namespace Todo.Models
{
    /// <summary></summary>
    public partial class CreateResponse1 : IJsonModel<CreateResponse1>
    {
        internal CreateResponse1()
        {
        }

        void IJsonModel<CreateResponse1>.Write(Utf8JsonWriter writer, ModelReaderWriterOptions options)
        {
            writer.WriteStartObject();
            JsonModelWriteCore(writer, options);
            writer.WriteEndObject();
        }

        /// <param name="writer"> The JSON writer. </param>
        /// <param name="options"> The client options for reading and writing models. </param>
        protected virtual void JsonModelWriteCore(Utf8JsonWriter writer, ModelReaderWriterOptions options)
        {
            string format = options.Format == "W" ? ((IPersistableModel<CreateResponse1>)this).GetFormatFromOptions(options) : options.Format;
            if (format != "J")
            {
                throw new FormatException($"The model {nameof(CreateResponse1)} does not support writing '{format}' format.");
            }
            if (options.Format != "W")
            {
                writer.WritePropertyName("id"u8);
                writer.WriteNumberValue(Id);
            }
            writer.WritePropertyName("username"u8);
            writer.WriteStringValue(Username);
            writer.WritePropertyName("email"u8);
            writer.WriteStringValue(Email);
            writer.WritePropertyName("token"u8);
            writer.WriteStringValue(Token);
            if (options.Format != "W" && _additionalBinaryDataProperties != null)
            {
                foreach (var item in _additionalBinaryDataProperties)
                {
                    writer.WritePropertyName(item.Key);
#if NET6_0_OR_GREATER
                    writer.WriteRawValue(item.Value);
#else
                    using (JsonDocument document = JsonDocument.Parse(item.Value))
                    {
                        JsonSerializer.Serialize(writer, document.RootElement);
                    }
#endif
                }
            }
        }

        CreateResponse1 IJsonModel<CreateResponse1>.Create(ref Utf8JsonReader reader, ModelReaderWriterOptions options) => JsonModelCreateCore(ref reader, options);

        /// <param name="reader"> The JSON reader. </param>
        /// <param name="options"> The client options for reading and writing models. </param>
        protected virtual CreateResponse1 JsonModelCreateCore(ref Utf8JsonReader reader, ModelReaderWriterOptions options)
        {
            string format = options.Format == "W" ? ((IPersistableModel<CreateResponse1>)this).GetFormatFromOptions(options) : options.Format;
            if (format != "J")
            {
                throw new FormatException($"The model {nameof(CreateResponse1)} does not support reading '{format}' format.");
            }
            using JsonDocument document = JsonDocument.ParseValue(ref reader);
            return DeserializeCreateResponse1(document.RootElement, options);
        }

        internal static CreateResponse1 DeserializeCreateResponse1(JsonElement element, ModelReaderWriterOptions options)
        {
            if (element.ValueKind == JsonValueKind.Null)
            {
                return null;
            }
            long id = default;
            string username = default;
            string email = default;
            string token = default;
            IDictionary<string, BinaryData> additionalBinaryDataProperties = new ChangeTrackingDictionary<string, BinaryData>();
            foreach (var prop in element.EnumerateObject())
            {
                if (prop.NameEquals("id"u8))
                {
                    id = prop.Value.GetInt64();
                    continue;
                }
                if (prop.NameEquals("username"u8))
                {
                    username = prop.Value.GetString();
                    continue;
                }
                if (prop.NameEquals("email"u8))
                {
                    email = prop.Value.GetString();
                    continue;
                }
                if (prop.NameEquals("token"u8))
                {
                    token = prop.Value.GetString();
                    continue;
                }
                if (options.Format != "W")
                {
                    additionalBinaryDataProperties.Add(prop.Name, BinaryData.FromString(prop.Value.GetRawText()));
                }
            }
            return new CreateResponse1(id, username, email, token, additionalBinaryDataProperties);
        }

        BinaryData IPersistableModel<CreateResponse1>.Write(ModelReaderWriterOptions options) => PersistableModelWriteCore(options);

        /// <param name="options"> The client options for reading and writing models. </param>
        protected virtual BinaryData PersistableModelWriteCore(ModelReaderWriterOptions options)
        {
            string format = options.Format == "W" ? ((IPersistableModel<CreateResponse1>)this).GetFormatFromOptions(options) : options.Format;
            switch (format)
            {
                case "J":
                    return ModelReaderWriter.Write(this, options);
                default:
                    throw new FormatException($"The model {nameof(CreateResponse1)} does not support writing '{options.Format}' format.");
            }
        }

        CreateResponse1 IPersistableModel<CreateResponse1>.Create(BinaryData data, ModelReaderWriterOptions options) => PersistableModelCreateCore(data, options);

        /// <param name="data"> The data to parse. </param>
        /// <param name="options"> The client options for reading and writing models. </param>
        protected virtual CreateResponse1 PersistableModelCreateCore(BinaryData data, ModelReaderWriterOptions options)
        {
            string format = options.Format == "W" ? ((IPersistableModel<CreateResponse1>)this).GetFormatFromOptions(options) : options.Format;
            switch (format)
            {
                case "J":
                    using (JsonDocument document = JsonDocument.Parse(data))
                    {
                        return DeserializeCreateResponse1(document.RootElement, options);
                    }
                default:
                    throw new FormatException($"The model {nameof(CreateResponse1)} does not support reading '{options.Format}' format.");
            }
        }

        string IPersistableModel<CreateResponse1>.GetFormatFromOptions(ModelReaderWriterOptions options) => "J";

        /// <param name="createResponse1"> The <see cref="CreateResponse1"/> to serialize into <see cref="BinaryContent"/>. </param>
        public static implicit operator BinaryContent(CreateResponse1 createResponse1)
        {
            if (createResponse1 == null)
            {
                return null;
            }
            return BinaryContent.Create(createResponse1, ModelSerializationExtensions.WireOptions);
        }

        /// <param name="result"> The <see cref="ClientResult"/> to deserialize the <see cref="CreateResponse1"/> from. </param>
        public static explicit operator CreateResponse1(ClientResult result)
        {
            using PipelineResponse response = result.GetRawResponse();
            using JsonDocument document = JsonDocument.Parse(response.Content);
            return DeserializeCreateResponse1(document.RootElement, ModelSerializationExtensions.WireOptions);
        }
    }
}