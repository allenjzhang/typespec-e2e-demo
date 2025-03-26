import { Client, ClientOptions, getClient } from "@typespec/ts-http-runtime";

export interface ToysClientContext extends Client {

}export interface ToysClientOptions extends ClientOptions {
  endpoint?: string;
}export function createToysClientContext(
  endpoint: string,
  options?: ToysClientOptions,): ToysClientContext {
  const params: Record<string, any> = {
    endpoint: endpoint
  };
  const resolvedEndpoint = "{endpoint}".replace(/{([^}]+)}/g, (_, key) =>
    key in params ? String(params[key]) : (() => { throw new Error(`Missing parameter: ${key}`); })()
  );;return getClient(resolvedEndpoint,{
    ...options,
  })
}