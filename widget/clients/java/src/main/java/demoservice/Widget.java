package demoservice;

import io.clientcore.core.annotations.Metadata;
import io.clientcore.core.annotations.TypeConditions;
import io.clientcore.core.serialization.json.JsonReader;
import io.clientcore.core.serialization.json.JsonSerializable;
import io.clientcore.core.serialization.json.JsonToken;
import io.clientcore.core.serialization.json.JsonWriter;
import java.io.IOException;

/**
 * The Widget model.
 */
@Metadata(conditions = { TypeConditions.IMMUTABLE })
public final class Widget implements JsonSerializable<Widget> {
    /*
     * The id property.
     */
    @Metadata(generated = true)
    private final String id;

    /*
     * The weight property.
     */
    @Metadata(generated = true)
    private final int weight;

    /*
     * The color property.
     */
    @Metadata(generated = true)
    private final WidgetColor color;

    /**
     * Creates an instance of Widget class.
     * 
     * @param id the id value to set.
     * @param weight the weight value to set.
     * @param color the color value to set.
     */
    @Metadata(generated = true)
    private Widget(String id, int weight, WidgetColor color) {
        this.id = id;
        this.weight = weight;
        this.color = color;
    }

    /**
     * Get the id property: The id property.
     * 
     * @return the id value.
     */
    @Metadata(generated = true)
    public String getId() {
        return this.id;
    }

    /**
     * Get the weight property: The weight property.
     * 
     * @return the weight value.
     */
    @Metadata(generated = true)
    public int getWeight() {
        return this.weight;
    }

    /**
     * Get the color property: The color property.
     * 
     * @return the color value.
     */
    @Metadata(generated = true)
    public WidgetColor getColor() {
        return this.color;
    }

    /**
     * {@inheritDoc}
     */
    @Metadata(generated = true)
    @Override
    public JsonWriter toJson(JsonWriter jsonWriter) throws IOException {
        jsonWriter.writeStartObject();
        jsonWriter.writeStringField("id", this.id);
        jsonWriter.writeIntField("weight", this.weight);
        jsonWriter.writeStringField("color", this.color == null ? null : this.color.toString());
        return jsonWriter.writeEndObject();
    }

    /**
     * Reads an instance of Widget from the JsonReader.
     * 
     * @param jsonReader The JsonReader being read.
     * @return An instance of Widget if the JsonReader was pointing to an instance of it, or null if it was pointing to
     * JSON null.
     * @throws IllegalStateException If the deserialized JSON object was missing any required properties.
     * @throws IOException If an error occurs while reading the Widget.
     */
    @Metadata(generated = true)
    public static Widget fromJson(JsonReader jsonReader) throws IOException {
        return jsonReader.readObject(reader -> {
            String id = null;
            int weight = 0;
            WidgetColor color = null;
            while (reader.nextToken() != JsonToken.END_OBJECT) {
                String fieldName = reader.getFieldName();
                reader.nextToken();

                if ("id".equals(fieldName)) {
                    id = reader.getString();
                } else if ("weight".equals(fieldName)) {
                    weight = reader.getInt();
                } else if ("color".equals(fieldName)) {
                    color = WidgetColor.fromString(reader.getString());
                } else {
                    reader.skipChildren();
                }
            }
            return new Widget(id, weight, color);
        });
    }
}
