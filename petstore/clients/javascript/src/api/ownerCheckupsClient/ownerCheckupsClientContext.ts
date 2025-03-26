import { Client, ClientOptions, getClient } from "@typespec/ts-http-runtime";

export interface OwnerCheckupsClientContext extends Client {

}export interface OwnerCheckupsClientOptions extends ClientOptions {
  endpoint?: string;
}export function createOwnerCheckupsClientContext(
  endpoint: string,
  options?: OwnerCheckupsClientOptions,): OwnerCheckupsClientContext {
  const params: Record<string, any> = {
    endpoint: endpoint
  };
  const resolvedEndpoint = "{endpoint}".replace(/{([^}]+)}/g, (_, key) =>
    key in params ? String(params[key]) : (() => { throw new Error(`Missing parameter: ${key}`); })()
  );;return getClient(resolvedEndpoint,{
    ...options,
  })
}