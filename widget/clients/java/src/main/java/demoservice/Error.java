package demoservice;

import io.clientcore.core.annotations.Metadata;
import io.clientcore.core.annotations.TypeConditions;
import io.clientcore.core.serialization.json.JsonReader;
import io.clientcore.core.serialization.json.JsonSerializable;
import io.clientcore.core.serialization.json.JsonToken;
import io.clientcore.core.serialization.json.JsonWriter;
import java.io.IOException;

/**
 * The Error model.
 */
@Metadata(conditions = { TypeConditions.IMMUTABLE })
public final class Error implements JsonSerializable<Error> {
    /*
     * The message property.
     */
    @Metadata(generated = true)
    private final String message;

    /**
     * Creates an instance of Error class.
     * 
     * @param message the message value to set.
     */
    @Metadata(generated = true)
    private Error(String message) {
        this.message = message;
    }

    /**
     * Get the message property: The message property.
     * 
     * @return the message value.
     */
    @Metadata(generated = true)
    public String getMessage() {
        return this.message;
    }

    /**
     * {@inheritDoc}
     */
    @Metadata(generated = true)
    @Override
    public JsonWriter toJson(JsonWriter jsonWriter) throws IOException {
        jsonWriter.writeStartObject();
        jsonWriter.writeStringField("message", this.message);
        return jsonWriter.writeEndObject();
    }

    /**
     * Reads an instance of Error from the JsonReader.
     * 
     * @param jsonReader The JsonReader being read.
     * @return An instance of Error if the JsonReader was pointing to an instance of it, or null if it was pointing to
     * JSON null.
     * @throws IllegalStateException If the deserialized JSON object was missing any required properties.
     * @throws IOException If an error occurs while reading the Error.
     */
    @Metadata(generated = true)
    public static Error fromJson(JsonReader jsonReader) throws IOException {
        return jsonReader.readObject(reader -> {
            String message = null;
            while (reader.nextToken() != JsonToken.END_OBJECT) {
                String fieldName = reader.getFieldName();
                reader.nextToken();

                if ("message".equals(fieldName)) {
                    message = reader.getString();
                } else {
                    reader.skipChildren();
                }
            }
            return new Error(message);
        });
    }
}
