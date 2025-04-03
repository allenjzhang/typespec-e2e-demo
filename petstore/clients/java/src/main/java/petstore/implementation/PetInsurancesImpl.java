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
import petstore.Insurance;
import petstore.PetStoreError;

/**
 * An instance of this class provides access to all the operations defined in PetInsurances.
 */
public final class PetInsurancesImpl {
    /**
     * The proxy service used to perform REST calls.
     */
    private final PetInsurancesService service;

    /**
     * The service client containing this operation class.
     */
    private final PetStoreClientImpl client;

    /**
     * Initializes an instance of PetInsurancesImpl.
     * 
     * @param client the instance of the service client containing this operation class.
     */
    PetInsurancesImpl(PetStoreClientImpl client) {
        this.service = RestProxy.create(PetInsurancesService.class, client.getHttpPipeline());
        this.client = client;
    }

    /**
     * The interface defining all the services for PetStoreClientPetInsurances to be used by the proxy service to
     * perform REST calls.
     */
    @ServiceInterface(name = "PetStoreClientPetIns", host = "{endpoint}")
    public interface PetInsurancesService {
        @HttpRequestInformation(
            method = HttpMethod.GET,
            path = "/pets/{petId}/insurance",
            expectedStatusCodes = { 200 })
        @UnexpectedResponseExceptionDetail(exceptionBodyClass = PetStoreError.class)
        Response<Insurance> getSync(@HostParam("endpoint") String endpoint, @PathParam("petId") int petId,
            @HeaderParam("Accept") String accept, RequestOptions requestOptions);

        @HttpRequestInformation(
            method = HttpMethod.PATCH,
            path = "/pets/{petId}/insurance",
            expectedStatusCodes = { 200 })
        @UnexpectedResponseExceptionDetail(exceptionBodyClass = PetStoreError.class)
        Response<Insurance> updateSync(@HostParam("endpoint") String endpoint, @PathParam("petId") int petId,
            @HeaderParam("Content-Type") String contentType, @HeaderParam("Accept") String accept,
            @BodyParam("application/json") BinaryData properties, RequestOptions requestOptions);
    }

    /**
     * Gets the singleton resource.
     * <p><strong>Response Body Schema</strong></p>
     * 
     * <pre>
     * {@code
     * {
     *     provider: String (Required)
     *     premium: int (Required)
     *     deductible: int (Required)
     * }
     * }
     * </pre>
     * 
     * @param petId The petId parameter.
     * @param requestOptions The options to configure the HTTP request before HTTP client sends it.
     * @throws HttpResponseException thrown if the service returns an error.
     * @return the singleton resource.
     */
    public Response<Insurance> getWithResponse(int petId, RequestOptions requestOptions) {
        final String accept = "application/json";
        return service.getSync(this.client.getEndpoint(), petId, accept, requestOptions);
    }

    /**
     * Updates the singleton resource.
     * <p><strong>Request Body Schema</strong></p>
     * 
     * <pre>
     * {@code
     * {
     *     provider: String (Optional)
     *     premium: Integer (Optional)
     *     deductible: Integer (Optional)
     * }
     * }
     * </pre>
     * 
     * <p><strong>Response Body Schema</strong></p>
     * 
     * <pre>
     * {@code
     * {
     *     provider: String (Required)
     *     premium: int (Required)
     *     deductible: int (Required)
     * }
     * }
     * </pre>
     * 
     * @param petId The petId parameter.
     * @param properties The properties parameter.
     * @param requestOptions The options to configure the HTTP request before HTTP client sends it.
     * @throws HttpResponseException thrown if the service returns an error.
     * @return the response.
     */
    public Response<Insurance> updateWithResponse(int petId, BinaryData properties, RequestOptions requestOptions) {
        final String contentType = "application/json";
        final String accept = "application/json";
        return service.updateSync(this.client.getEndpoint(), petId, contentType, accept, properties, requestOptions);
    }
}
