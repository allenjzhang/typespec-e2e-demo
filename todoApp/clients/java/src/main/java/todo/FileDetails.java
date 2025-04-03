package todo;

import io.clientcore.core.annotations.Metadata;
import io.clientcore.core.annotations.TypeConditions;
import io.clientcore.core.models.binarydata.BinaryData;

/**
 * A file in an HTTP request, response, or multipart payload.
 * 
 * A file in an HTTP request, response, or multipart payload.
 * 
 * Files have a special meaning that the HTTP library understands. When the body of an HTTP request, response,
 * or multipart payload is _effectively_ an instance of `TypeSpec.Http.File` or any type that extends it, the
 * operation is treated as a file upload or download.
 * 
 * When using file bodies, the fields of the file model are defined to come from particular locations by default:
 * 
 * - `contentType`: The `Content-Type` header of the request, response, or multipart payload (CANNOT be overridden or
 * changed).
 * - `contents`: The body of the request, response, or multipart payload (CANNOT be overridden or changed).
 * - `filename`: The `filename` parameter value of the `Content-Disposition` header of the response or multipart payload
 * (MAY be overridden or changed).
 * 
 * A File may be used as a normal structured JSON object in a request or response, if the request specifies an explicit
 * `Content-Type` header. In this case, the entire File model is serialized as if it were any other model. In a JSON
 * payload,
 * it will have a structure like:
 * 
 * ```
 * {
 * "contentType": &lt;string?&gt;,
 * "filename": &lt;string?&gt;,
 * "contents": &lt;string, base64&gt;
 * }
 * ```
 * 
 * The `contentType` _within_ the file defines what media types the data inside the file can be, but if the
 * specification
 * defines a `Content-Type` for the payload as HTTP metadata, that `Content-Type` metadata defines _how the file is
 * serialized_. See the examples below for more information.
 * 
 * NOTE: The `filename` and `contentType` fields are optional. Furthermore, the default location of `filename`
 * (`Content-Disposition: &lt;disposition&gt;; filename=&lt;filename&gt;`) is only valid in HTTP responses and multipart
 * payloads. If
 * you wish to send the `filename` in a request, you must use HTTP metadata decorators to describe the location of the
 * `filename` field. You can combine the metadata decorators with `&#064;visibility` to control when the `filename`
 * location
 * is overridden, as shown in the examples below.
 */
@Metadata(conditions = { TypeConditions.FLUENT })
public final class FileDetails {
    /*
     * The content of the file.
     */
    @Metadata(generated = true)
    private final BinaryData content;

    /*
     * The filename of the file.
     */
    @Metadata(generated = true)
    private String filename;

    /*
     * The content-type of the file.
     */
    @Metadata(generated = true)
    private String contentType = "application/octet-stream";

    /**
     * Creates an instance of FileDetails class.
     * 
     * @param content the content value to set.
     */
    @Metadata(generated = true)
    public FileDetails(BinaryData content) {
        this.content = content;
    }

    /**
     * Get the content property: The content of the file.
     * 
     * @return the content value.
     */
    @Metadata(generated = true)
    public BinaryData getContent() {
        return this.content;
    }

    /**
     * Get the filename property: The filename of the file.
     * 
     * @return the filename value.
     */
    @Metadata(generated = true)
    public String getFilename() {
        return this.filename;
    }

    /**
     * Set the filename property: The filename of the file.
     * 
     * @param filename the filename value to set.
     * @return the FileDetails object itself.
     */
    @Metadata(generated = true)
    public FileDetails setFilename(String filename) {
        this.filename = filename;
        return this;
    }

    /**
     * Get the contentType property: The content-type of the file.
     * 
     * @return the contentType value.
     */
    @Metadata(generated = true)
    public String getContentType() {
        return this.contentType;
    }

    /**
     * Set the contentType property: The content-type of the file.
     * 
     * @param contentType the contentType value to set.
     * @return the FileDetails object itself.
     */
    @Metadata(generated = true)
    public FileDetails setContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
}
