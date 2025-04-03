package demoservice.implementation;

import io.clientcore.core.http.pipeline.HttpPipeline;

/**
 * Initializes a new instance of the DemoServiceClient type.
 */
public final class DemoServiceClientImpl {
    /**
     * Service host.
     */
    private final String endpoint;

    /**
     * Gets Service host.
     * 
     * @return the endpoint value.
     */
    public String getEndpoint() {
        return this.endpoint;
    }

    /**
     * The HTTP pipeline to send requests through.
     */
    private final HttpPipeline httpPipeline;

    /**
     * Gets The HTTP pipeline to send requests through.
     * 
     * @return the httpPipeline value.
     */
    public HttpPipeline getHttpPipeline() {
        return this.httpPipeline;
    }

    /**
     * The WidgetServicesImpl object to access its operations.
     */
    private final WidgetServicesImpl widgetServices;

    /**
     * Gets the WidgetServicesImpl object to access its operations.
     * 
     * @return the WidgetServicesImpl object.
     */
    public WidgetServicesImpl getWidgetServices() {
        return this.widgetServices;
    }

    /**
     * Initializes an instance of DemoServiceClient client.
     * 
     * @param httpPipeline The HTTP pipeline to send requests through.
     * @param endpoint Service host.
     */
    public DemoServiceClientImpl(HttpPipeline httpPipeline, String endpoint) {
        this.httpPipeline = httpPipeline;
        this.endpoint = endpoint;
        this.widgetServices = new WidgetServicesImpl(this);
    }
}
