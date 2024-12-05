// Code generated by Microsoft (R) TypeSpec Code Generator.

package todo;

import io.clientcore.core.annotation.Metadata;
import io.clientcore.core.annotation.ServiceClient;
import io.clientcore.core.http.exception.HttpResponseException;
import io.clientcore.core.http.models.RequestOptions;
import io.clientcore.core.http.models.Response;
import io.clientcore.core.util.binarydata.BinaryData;
import todo.implementation.UsersImpl;

/**
 * Initializes a new instance of the synchronous TodoClient type.
 */
@ServiceClient(builder = TodoClientBuilder.class)
public final class UsersClient {
    @Metadata(generated = true)
    private final UsersImpl serviceClient;

    /**
     * Initializes an instance of UsersClient class.
     * 
     * @param serviceClient the service client implementation.
     */
    @Metadata(generated = true)
    UsersClient(UsersImpl serviceClient) {
        this.serviceClient = serviceClient;
    }

    /**
     * The create operation.
     * <p><strong>Request Body Schema</strong></p>
     * 
     * <pre>
     * {@code
     * {
     *     id: long (Required)
     *     username: String (Required)
     *     email: String (Required)
     *     password: String (Required)
     * }
     * }
     * </pre>
     * 
     * @param user The user parameter.
     * @param requestOptions The options to configure the HTTP request before HTTP client sends it.
     * @throws HttpResponseException thrown if the service returns an error.
     * @return the response.
     */
    @Metadata(generated = true)
    public Response<CreateResponse1> createWithResponse(BinaryData user, RequestOptions requestOptions) {
        return this.serviceClient.createWithResponse(user, requestOptions);
    }

    /**
     * The create operation.
     * 
     * @param user The user parameter.
     * @throws IllegalArgumentException thrown if parameters fail the validation.
     * @throws HttpResponseException thrown if the service returns an error.
     * @throws RuntimeException all other wrapped checked exceptions if the request fails to be sent.
     * @return the response.
     */
    @Metadata(generated = true)
    public CreateResponse1 create(User user) {
        // Generated convenience method for createWithResponse
        RequestOptions requestOptions = new RequestOptions();
        return createWithResponse(BinaryData.fromObject(user), requestOptions).getValue();
    }
}
