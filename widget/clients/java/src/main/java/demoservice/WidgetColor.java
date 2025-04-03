package demoservice;

/**
 * Defines values for WidgetColor.
 */
public enum WidgetColor {
    /**
     * Enum value red.
     */
    RED("red"),

    /**
     * Enum value blue.
     */
    BLUE("blue");

    /**
     * The actual serialized value for a WidgetColor instance.
     */
    private final String value;

    WidgetColor(String value) {
        this.value = value;
    }

    /**
     * Parses a serialized value to a WidgetColor instance.
     * 
     * @param value the serialized value to parse.
     * @return the parsed WidgetColor object, or null if unable to parse.
     */
    public static WidgetColor fromString(String value) {
        if (value == null) {
            return null;
        }
        WidgetColor[] items = WidgetColor.values();
        for (WidgetColor item : items) {
            if (item.toString().equalsIgnoreCase(value)) {
                return item;
            }
        }
        return null;
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public String toString() {
        return this.value;
    }
}
