package demoservice;

import demoservice.implementation.WidgetServicesImpl;
import io.clientcore.core.annotations.Metadata;
import io.clientcore.core.annotations.ServiceClient;
import io.clientcore.core.http.exceptions.HttpResponseException;
import io.clientcore.core.http.models.RequestOptions;
import io.clientcore.core.http.models.Response;
import io.clientcore.core.models.binarydata.BinaryData;

/**
 * Initializes a new instance of the synchronous DemoServiceClient type.
 */
@ServiceClient(builder = DemoServiceClientBuilder.class)
public final class DemoServiceClient {
    @Metadata(generated = true)
    private final WidgetServicesImpl serviceClient;

    /**
     * Initializes an instance of DemoServiceClient class.
     * 
     * @param serviceClient the service client implementation.
     */
    @Metadata(generated = true)
    DemoServiceClient(WidgetServicesImpl serviceClient) {
        this.serviceClient = serviceClient;
    }

    /**
     * Gets an instance of the resource.
     * <p><strong>Response Body Schema</strong></p>
     * 
     * <pre>
     * {@code
     * {
     *     id: String (Required)
     *     weight: int (Required)
     *     color: String(red/blue) (Required)
     * }
     * }
     * </pre>
     * 
     * @param id The id parameter.
     * @param requestOptions The options to configure the HTTP request before HTTP client sends it.
     * @throws HttpResponseException thrown if the service returns an error.
     * @return an instance of the resource.
     */
    @Metadata(generated = true)
    public Response<Widget> getWithResponse(String id, RequestOptions requestOptions) {
        return this.serviceClient.getWithResponse(id, requestOptions);
    }

    /**
     * Updates an existing instance of the resource.
     * <p><strong>Request Body Schema</strong></p>
     * 
     * <pre>
     * {@code
     * {
     *     weight: Integer (Optional)
     *     color: String(red/blue) (Optional)
     * }
     * }
     * </pre>
     * 
     * <p><strong>Response Body Schema</strong></p>
     * 
     * <pre>
     * {@code
     * {
     *     id: String (Required)
     *     weight: int (Required)
     *     color: String(red/blue) (Required)
     * }
     * }
     * </pre>
     * 
     * @param id The id parameter.
     * @param properties The properties parameter.
     * @param requestOptions The options to configure the HTTP request before HTTP client sends it.
     * @throws HttpResponseException thrown if the service returns an error.
     * @return the response.
     */
    @Metadata(generated = true)
    public Response<Widget> updateWithResponse(String id, BinaryData properties, RequestOptions requestOptions) {
        return this.serviceClient.updateWithResponse(id, properties, requestOptions);
    }

    /**
     * Deletes an existing instance of the resource.
     * 
     * @param id The id parameter.
     * @param requestOptions The options to configure the HTTP request before HTTP client sends it.
     * @throws HttpResponseException thrown if the service returns an error.
     * @return the response.
     */
    @Metadata(generated = true)
    public Response<Void> deleteWithResponse(String id, RequestOptions requestOptions) {
        return this.serviceClient.deleteWithResponse(id, requestOptions);
    }

    /**
     * Creates a new instance of the resource.
     * <p><strong>Request Body Schema</strong></p>
     * 
     * <pre>
     * {@code
     * {
     *     weight: int (Required)
     *     color: String(red/blue) (Required)
     * }
     * }
     * </pre>
     * 
     * <p><strong>Response Body Schema</strong></p>
     * 
     * <pre>
     * {@code
     * {
     *     id: String (Required)
     *     weight: int (Required)
     *     color: String(red/blue) (Required)
     * }
     * }
     * </pre>
     * 
     * @param resource The resource parameter.
     * @param requestOptions The options to configure the HTTP request before HTTP client sends it.
     * @throws HttpResponseException thrown if the service returns an error.
     * @return the response.
     */
    @Metadata(generated = true)
    public Response<Widget> createWithResponse(BinaryData resource, RequestOptions requestOptions) {
        return this.serviceClient.createWithResponse(resource, requestOptions);
    }

    /**
     * Lists all instances of the resource.
     * <p><strong>Response Body Schema</strong></p>
     * 
     * <pre>
     * {@code
     * {
     *     value (Required): [
     *          (Required){
     *             id: String (Required)
     *             weight: int (Required)
     *             color: String(red/blue) (Required)
     *         }
     *     ]
     *     nextLink: String (Optional)
     * }
     * }
     * </pre>
     * 
     * @param requestOptions The options to configure the HTTP request before HTTP client sends it.
     * @throws HttpResponseException thrown if the service returns an error.
     * @return paged response of Widget items.
     */
    @Metadata(generated = true)
    public Response<WidgetCollectionWithNextLink> listWithResponse(RequestOptions requestOptions) {
        return this.serviceClient.listWithResponse(requestOptions);
    }

    /**
     * Gets an instance of the resource.
     * 
     * @param id The id parameter.
     * @throws IllegalArgumentException thrown if parameters fail the validation.
     * @throws HttpResponseException thrown if the service returns an error.
     * @throws RuntimeException all other wrapped checked exceptions if the request fails to be sent.
     * @return an instance of the resource.
     */
    @Metadata(generated = true)
    public Widget get(String id) {
        // Generated convenience method for getWithResponse
        RequestOptions requestOptions = new RequestOptions();
        return getWithResponse(id, requestOptions).getValue();
    }

    /**
     * Updates an existing instance of the resource.
     * 
     * @param id The id parameter.
     * @param properties The properties parameter.
     * @throws IllegalArgumentException thrown if parameters fail the validation.
     * @throws HttpResponseException thrown if the service returns an error.
     * @throws RuntimeException all other wrapped checked exceptions if the request fails to be sent.
     * @return the response.
     */
    @Metadata(generated = true)
    public Widget update(String id, WidgetUpdate properties) {
        // Generated convenience method for updateWithResponse
        RequestOptions requestOptions = new RequestOptions();
        return updateWithResponse(id, BinaryData.fromObject(properties), requestOptions).getValue();
    }

    /**
     * Deletes an existing instance of the resource.
     * 
     * @param id The id parameter.
     * @throws IllegalArgumentException thrown if parameters fail the validation.
     * @throws HttpResponseException thrown if the service returns an error.
     * @throws RuntimeException all other wrapped checked exceptions if the request fails to be sent.
     */
    @Metadata(generated = true)
    public void delete(String id) {
        // Generated convenience method for deleteWithResponse
        RequestOptions requestOptions = new RequestOptions();
        deleteWithResponse(id, requestOptions).getValue();
    }

    /**
     * Creates a new instance of the resource.
     * 
     * @param resource The resource parameter.
     * @throws IllegalArgumentException thrown if parameters fail the validation.
     * @throws HttpResponseException thrown if the service returns an error.
     * @throws RuntimeException all other wrapped checked exceptions if the request fails to be sent.
     * @return the response.
     */
    @Metadata(generated = true)
    public Widget create(WidgetCreate resource) {
        // Generated convenience method for createWithResponse
        RequestOptions requestOptions = new RequestOptions();
        return createWithResponse(BinaryData.fromObject(resource), requestOptions).getValue();
    }

    /**
     * Lists all instances of the resource.
     * 
     * @throws HttpResponseException thrown if the service returns an error.
     * @throws RuntimeException all other wrapped checked exceptions if the request fails to be sent.
     * @return paged response of Widget items.
     */
    @Metadata(generated = true)
    public WidgetCollectionWithNextLink list() {
        // Generated convenience method for listWithResponse
        RequestOptions requestOptions = new RequestOptions();
        return listWithResponse(requestOptions).getValue();
    }
}
