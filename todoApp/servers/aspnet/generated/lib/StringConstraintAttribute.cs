// Generated by @typespec/http-server-csharp
// <auto-generated />
  #nullable enable

  using System.Text.Json;
  using System.Text.Json.Serialization;
  
  namespace TypeSpec.Helpers.JsonConverters
  {
    /// <summary>
    /// Provides constraints for a string values property
    /// </summary>
    public  class StringConstraint : JsonConverterAttribute
    {
        int? _minLength = null, _maxLength = null;
        public StringConstraint()
        {
        }

        /// <summary>
        /// The minimum length of the string
        /// </summary>
        public int MinLength { get { return _minLength.HasValue ? _minLength.Value : 0; } set { _minLength = value; } }
        /// <summary>
        /// The maximum length of the string
        /// </summary>
        public int MaxLength { get { return _maxLength.HasValue ? _maxLength.Value : 0; } set { _maxLength = value; } }
        /// <summary>
        /// The pattern that the string must match
        /// </summary>
        public string? Pattern { get; set; }

        public override JsonConverter? CreateConverter(Type typeToConvert)
        {
            return new StringJsonConverter(_minLength, _maxLength, Pattern);
        }
    }

    public class StringJsonConverter : JsonConverter<string>
    {
        public StringJsonConverter(int? minLength, int? maxLength, string? pattern, JsonSerializerOptions? options = null)
        {
            MinLength = minLength;
            MaxLength = maxLength;
            Pattern = pattern;
            if (options != null)
            {
                InnerConverter = options.GetConverter(typeof(string)) as JsonConverter<string>;
            }
        }

        protected int? MinLength { get; }
        protected int? MaxLength { get; }
        protected string? Pattern { get; }

        private JsonConverter<string>? InnerConverter { get; set; }

        private JsonConverter<string> GetInnerConverter(JsonSerializerOptions options)
        {
            if (InnerConverter == null)
            {
                InnerConverter = (JsonConverter<string>)options.GetConverter(typeof(string));
            }

            return InnerConverter;
        }

        public override bool CanConvert(Type typeToConvert)
        {
            return base.CanConvert(typeToConvert);
        }

        public override string? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            var innerConverter = GetInnerConverter(options);
            string? candidate = innerConverter.Read(ref reader, typeToConvert, options);
            if (MinLength.HasValue && (candidate == null || candidate.Length < MinLength.Value))
            {
                throw new JsonException($"String length less than minimum length {MinLength.Value}");
            }

            if (candidate != null)
            {
                if (MaxLength.HasValue && candidate.Length > MaxLength.Value)
                {
                    throw new JsonException($"String length greater than maximum length {MaxLength.Value}");
                }

                if (Pattern != null && !System.Text.RegularExpressions.Regex.IsMatch(candidate, Pattern))
                {
                    throw new JsonException($"String does not match pattern {Pattern}");
                }
            }

            return candidate;
        }

        public override void Write(Utf8JsonWriter writer, string value, JsonSerializerOptions options)
        {
            if (MinLength.HasValue && (value == null || value.Length < MinLength.Value))
            {
                throw new JsonException($"String length less than minimum length {MinLength.Value}");
            }

            if (value != null)
            {
                if (MaxLength.HasValue && value.Length > MaxLength.Value)
                {
                    throw new JsonException($"String length greater than maximum length {MaxLength.Value}");
                }

                if (Pattern != null && !System.Text.RegularExpressions.Regex.IsMatch(value, Pattern))
                {
                    throw new JsonException($"String does not match pattern {Pattern}");
                }
                
                GetInnerConverter(options).Write(writer, value, options);
            }
        }
    }
}