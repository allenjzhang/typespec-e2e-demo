// Generated by @typespec/http-server-csharp
// <auto-generated />
#nullable enable
  
  using System.Text.Json;
  using System.Text.Json.Serialization;
  
  namespace TypeSpec.Helpers.JsonConverters
  {
    /// <summary>
    /// Constrains the number of elements in an array
    /// </summary>
    /// <typeparam name="T">The element type of the array</typeparam>
    public class ArrayConstraintAttribute<T> : JsonConverterAttribute
    {
        int? _minItems = null, _maxItems = null;
        /// <summary>
        /// The smallest number of allowed items
        /// </summary>
        public int MinItems { get { return _minItems.HasValue ? _minItems.Value : 0; } set { _minItems = value; } }
        /// <summary>
        /// The largest number of allowed items
        /// </summary>
        public int MaxItems { get { return _maxItems.HasValue ? _maxItems.Value : 0; } set { _maxItems = value; } }

        public ArrayConstraintAttribute()
        {
            
        }

        public override JsonConverter? CreateConverter(Type typeToConvert)
        {
            return new ConstrainedArrayConverter<T>(_minItems, _maxItems);
        }

        
    }

    public class ConstrainedArrayConverter<T> : JsonConverter<T[]>
    {
        public ConstrainedArrayConverter(int? min, int? max) : base()
        {
            _minItems = min;
            _maxItems = max;
        }

        internal int? _minItems, _maxItems;
        public JsonConverter<T>? InnerConverter { get; set; }

        public virtual Func<ConstrainedArrayConverter<T>, JsonSerializerOptions, JsonConverter<T>> InnerConverterFactory { get; set; } = ConverterHelpers.GetStandardInnerConverter<T>;


        internal bool ValidateMin(int count)
        {
            return !_minItems.HasValue || count >= _minItems.Value;
        }

        internal bool ValidateMax(int count)
        {
            return !_maxItems.HasValue || count <= _maxItems.Value;
        }

        internal void ValidateRange(int count)
        {
            if (!ValidateMax(count) || !ValidateMin(count))
            {
                throw new JsonException($"Number of array elements not in range [{(_minItems.HasValue ? _minItems.Value : 0)}, {(_maxItems.HasValue ? _maxItems.Value : Array.MaxLength)}]");
            }
        }
        public override T[]? Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
        {
            var _innerConverter = InnerConverterFactory(this, options);
            if (reader.TokenType != JsonTokenType.StartArray) { throw new JsonException("Expected start of array"); }
            var list = new List<T>();
            int count = 0;
            while (reader.Read())
            {
                if (reader.TokenType == JsonTokenType.EndArray) { ValidateRange(count); break; }
                if (!ValidateMax(count)) { ValidateRange(count); break; }
                T value = _innerConverter.Read(ref reader, typeof(T), options)!;
                list.Add(value);
                count++;
            }

            return list.ToArray();


        }

        public override void Write(Utf8JsonWriter writer, T[] value, JsonSerializerOptions options)
        {
            var _innerConverter = InnerConverterFactory(this, options);
            writer.WriteStartArray();
            for (int i = 0; i < value.Length; ++i)
                _innerConverter.Write(writer, value[i], options);
            writer.WriteEndArray();
        }
    }

    internal static class ConverterHelpers
    {
        internal static JsonConverter<T> GetStandardInnerConverter<T>(this ConstrainedArrayConverter<T> converter, JsonSerializerOptions options)
        {
            if (converter.InnerConverter == null)
            {
                converter.InnerConverter = (JsonConverter<T>)options.GetConverter(typeof(T));
            }

            return converter.InnerConverter;
        }
    }
  }