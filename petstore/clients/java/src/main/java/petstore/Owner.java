package petstore;

import io.clientcore.core.annotations.Metadata;
import io.clientcore.core.annotations.TypeConditions;
import io.clientcore.core.serialization.json.JsonReader;
import io.clientcore.core.serialization.json.JsonSerializable;
import io.clientcore.core.serialization.json.JsonToken;
import io.clientcore.core.serialization.json.JsonWriter;
import java.io.IOException;

/**
 * The Owner model.
 */
@Metadata(conditions = { TypeConditions.IMMUTABLE })
public final class Owner implements JsonSerializable<Owner> {
    /*
     * The id property.
     */
    @Metadata(generated = true)
    private long id;

    /*
     * The name property.
     */
    @Metadata(generated = true)
    private final String name;

    /*
     * The age property.
     */
    @Metadata(generated = true)
    private final int age;

    /**
     * Creates an instance of Owner class.
     * 
     * @param name the name value to set.
     * @param age the age value to set.
     */
    @Metadata(generated = true)
    private Owner(String name, int age) {
        this.name = name;
        this.age = age;
    }

    /**
     * Get the id property: The id property.
     * 
     * @return the id value.
     */
    @Metadata(generated = true)
    public long getId() {
        return this.id;
    }

    /**
     * Get the name property: The name property.
     * 
     * @return the name value.
     */
    @Metadata(generated = true)
    public String getName() {
        return this.name;
    }

    /**
     * Get the age property: The age property.
     * 
     * @return the age value.
     */
    @Metadata(generated = true)
    public int getAge() {
        return this.age;
    }

    /**
     * {@inheritDoc}
     */
    @Metadata(generated = true)
    @Override
    public JsonWriter toJson(JsonWriter jsonWriter) throws IOException {
        jsonWriter.writeStartObject();
        jsonWriter.writeStringField("name", this.name);
        jsonWriter.writeIntField("age", this.age);
        return jsonWriter.writeEndObject();
    }

    /**
     * Reads an instance of Owner from the JsonReader.
     * 
     * @param jsonReader The JsonReader being read.
     * @return An instance of Owner if the JsonReader was pointing to an instance of it, or null if it was pointing to
     * JSON null.
     * @throws IllegalStateException If the deserialized JSON object was missing any required properties.
     * @throws IOException If an error occurs while reading the Owner.
     */
    @Metadata(generated = true)
    public static Owner fromJson(JsonReader jsonReader) throws IOException {
        return jsonReader.readObject(reader -> {
            long id = 0L;
            String name = null;
            int age = 0;
            while (reader.nextToken() != JsonToken.END_OBJECT) {
                String fieldName = reader.getFieldName();
                reader.nextToken();

                if ("id".equals(fieldName)) {
                    id = reader.getLong();
                } else if ("name".equals(fieldName)) {
                    name = reader.getString();
                } else if ("age".equals(fieldName)) {
                    age = reader.getInt();
                } else {
                    reader.skipChildren();
                }
            }
            Owner deserializedOwner = new Owner(name, age);
            deserializedOwner.id = id;

            return deserializedOwner;
        });
    }
}
