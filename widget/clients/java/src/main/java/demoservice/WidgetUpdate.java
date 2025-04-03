package demoservice;

import io.clientcore.core.annotations.Metadata;
import io.clientcore.core.annotations.TypeConditions;
import io.clientcore.core.serialization.json.JsonReader;
import io.clientcore.core.serialization.json.JsonSerializable;
import io.clientcore.core.serialization.json.JsonToken;
import io.clientcore.core.serialization.json.JsonWriter;
import java.io.IOException;

/**
 * Resource create or update operation model.
 */
@Metadata(conditions = { TypeConditions.FLUENT })
public final class WidgetUpdate implements JsonSerializable<WidgetUpdate> {
    /*
     * The weight property.
     */
    @Metadata(generated = true)
    private Integer weight;

    /*
     * The color property.
     */
    @Metadata(generated = true)
    private WidgetColor color;

    /**
     * Creates an instance of WidgetUpdate class.
     */
    @Metadata(generated = true)
    public WidgetUpdate() {
    }

    /**
     * Get the weight property: The weight property.
     * 
     * @return the weight value.
     */
    @Metadata(generated = true)
    public Integer getWeight() {
        return this.weight;
    }

    /**
     * Set the weight property: The weight property.
     * 
     * @param weight the weight value to set.
     * @return the WidgetUpdate object itself.
     */
    @Metadata(generated = true)
    public WidgetUpdate setWeight(Integer weight) {
        this.weight = weight;
        return this;
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
     * Set the color property: The color property.
     * 
     * @param color the color value to set.
     * @return the WidgetUpdate object itself.
     */
    @Metadata(generated = true)
    public WidgetUpdate setColor(WidgetColor color) {
        this.color = color;
        return this;
    }

    /**
     * {@inheritDoc}
     */
    @Metadata(generated = true)
    @Override
    public JsonWriter toJson(JsonWriter jsonWriter) throws IOException {
        jsonWriter.writeStartObject();
        jsonWriter.writeNumberField("weight", this.weight);
        jsonWriter.writeStringField("color", this.color == null ? null : this.color.toString());
        return jsonWriter.writeEndObject();
    }

    /**
     * Reads an instance of WidgetUpdate from the JsonReader.
     * 
     * @param jsonReader The JsonReader being read.
     * @return An instance of WidgetUpdate if the JsonReader was pointing to an instance of it, or null if it was
     * pointing to JSON null.
     * @throws IOException If an error occurs while reading the WidgetUpdate.
     */
    @Metadata(generated = true)
    public static WidgetUpdate fromJson(JsonReader jsonReader) throws IOException {
        return jsonReader.readObject(reader -> {
            WidgetUpdate deserializedWidgetUpdate = new WidgetUpdate();
            while (reader.nextToken() != JsonToken.END_OBJECT) {
                String fieldName = reader.getFieldName();
                reader.nextToken();

                if ("weight".equals(fieldName)) {
                    deserializedWidgetUpdate.weight = reader.getNullable(JsonReader::getInt);
                } else if ("color".equals(fieldName)) {
                    deserializedWidgetUpdate.color = WidgetColor.fromString(reader.getString());
                } else {
                    reader.skipChildren();
                }
            }

            return deserializedWidgetUpdate;
        });
    }
}
