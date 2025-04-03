package petstore.implementation;

import io.clientcore.core.annotations.ServiceInterface;
import io.clientcore.core.http.RestProxy;
import io.clientcore.core.http.annotations.BodyParam;
import io.clientcore.core.http.annotations.HeaderParam;
import io.clientcore.core.http.annotations.HostParam;
import io.clientcore.core.http.annotations.HttpRequestInformation;
import io.clientcore.core.http.annotations.PathParam;
import io.clientcore.core.http.annotations.UnexpectedResponseExceptionDetail;
import io.clientcore.core.http.exceptions.HttpResponseException;
import io.clientcore.core.http.models.HttpMethod;
import io.clientcore.core.http.models.RequestOptions;
import io.clientcore.core.http.models.Response;
import io.clientcore.core.models.binarydata.BinaryData;
import petstore.Checkup;
import petstore.CheckupCollectionWithNextLink;
import petstore.PetStoreError;

/**
 * An instance of this class provides access to all the operations defined in PetCheckups.
 */
public final class PetCheckupsImpl {
    /**
     * The proxy service used to perform REST calls.
     */
    private final PetCheckupsService service;

    /**
     * The service client containing this operation class.
     */
    private final PetStoreClientImpl client;

    /**
     * Initializes an instance of PetCheckupsImpl.
     * 
     * @param client the instance of the service client containing this operation class.
     */
    PetCheckupsImpl(PetStoreClientImpl client) {
        this.service = RestProxy.create(PetCheckupsService.class, client.getHttpPipeline());
        this.client = client;
    }

    /**
     * The interface defining all the services for PetStoreClientPetCheckups to be used by the proxy service to perform
     * REST calls.
     */
    @ServiceInterface(name = "PetStoreClientPetChe", host = "{endpoint}")
    public interface PetCheckupsService {
        @HttpRequestInformation(
            method = HttpMethod.PATCH,
            path = "/pets/{petId}/checkups/{checkupId}",
            expectedStatusCodes = { 200, 201 })
        @UnexpectedResponseExceptionDetail(exceptionBodyClass = PetStoreError.class)
        Response<Checkup> createOrUpdateSync(@HostParam("endpoint") String endpoint, @PathParam("petId") int petId,
            @PathParam("checkupId") int checkupId, @HeaderParam("Content-Type") String contentType,
            @HeaderParam("Accept") String accept, @BodyParam("application/json") BinaryData resource,
            RequestOptions requestOptions);

        @HttpRequestInformation(method = HttpMethod.GET, path = "/pets/{petId}/checkups", expectedStatusCodes = { 200 })
        @UnexpectedResponseExceptionDetail(exceptionBodyClass = PetStoreError.class)
        Response<CheckupCollectionWithNextLink> listSync(@HostParam("endpoint") String endpoint,
            @PathParam("petId") int petId, @HeaderParam("Accept") String accept, RequestOptions requestOptions);
    }

    /**
     * Creates or update an instance of the extension resource.
     * <p><strong>Request Body Schema</strong></p>
     * 
     * <pre>
     * {@code
     * {
     *     vetName: String (Optional)
     *     notes: String (Optional)
     * }
     * }
     * </pre>
     * 
     * <p><strong>Response Body Schema</strong></p>
     * 
     * <pre>
     * {@code
     * {
     *     id: int (Required)
     *     vetName: String (Required)
     *     notes: String (Required)
     * }
     * }
     * </pre>
     * 
     * @param petId The petId parameter.
     * @param checkupId The checkupId parameter.
     * @param resource The resource parameter.
     * @param requestOptions The options to configure the HTTP request before HTTP client sends it.
     * @throws HttpResponseException thrown if the service returns an error.
     * @return the response.
     */
    public Response<Checkup> createOrUpdateWithResponse(int petId, int checkupId, BinaryData resource,
        RequestOptions requestOptions) {
        final String contentType = "application/json";
        final String accept = "application/json";
        return service.createOrUpdateSync(this.client.getEndpoint(), petId, checkupId, contentType, accept, resource,
            requestOptions);
    }

    /**
     * Lists all instances of the extension resource.
     * <p><strong>Response Body Schema</strong></p>
     * 
     * <pre>
     * {@code
     * {
     *     value (Required): [
     *          (Required){
     *             id: int (Required)
     *             vetName: String (Required)
     *             notes: String (Required)
     *         }
     *     ]
     *     nextLink: String (Optional)
     * }
     * }
     * </pre>
     * 
     * @param petId The petId parameter.
     * @param requestOptions The options to configure the HTTP request before HTTP client sends it.
     * @throws HttpResponseException thrown if the service returns an error.
     * @return paged response of Checkup items.
     */
    public Response<CheckupCollectionWithNextLink> listWithResponse(int petId, RequestOptions requestOptions) {
        final String accept = "application/json";
        return service.listSync(this.client.getEndpoint(), petId, accept, requestOptions);
    }
}
