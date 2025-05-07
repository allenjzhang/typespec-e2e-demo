import { Client, ClientOptions, KeyCredential, getClient } from "@typespec/ts-http-runtime";

export interface TodoItemsClientContext extends Client {

}export interface TodoItemsClientOptions extends ClientOptions {
  endpoint?: string;
}export function createTodoItemsClientContext(
  endpoint: string,
  credential: KeyCredential,
  options?: TodoItemsClientOptions,): TodoItemsClientContext {
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