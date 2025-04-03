import { Client, ClientOptions, KeyCredential, getClient } from "@typespec/ts-http-runtime";

export interface TodoClientContext extends Client {

}export interface TodoClientOptions extends ClientOptions {
  endpoint?: string;
}export function createTodoClientContext(
  endpoint: string,
  credential: KeyCredential,
  options?: TodoClientOptions,): TodoClientContext {
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