import { Client, ClientOptions, KeyCredential, getClient } from "@typespec/ts-http-runtime";

export interface AttachmentsClientContext extends Client {

}export interface AttachmentsClientOptions extends ClientOptions {
  endpoint?: string;
}export function createAttachmentsClientContext(
  endpoint: string,
  credential: KeyCredential,
  options?: AttachmentsClientOptions,): AttachmentsClientContext {
  const params: Record<string, any> = {
    endpoint: endpoint
  };
  const resolvedEndpoint = "{endpoint}".replace(/{([^}]+)}/g, (_, key) =>
    key in params ? String(params[key]) : (() => { throw new Error(`Missing parameter: ${key}`); })()
  );;return getClient(resolvedEndpoint,credential,{
    ...options,credentials: {
      apiKeyHeaderName: "Authorization"
    }
  })
}