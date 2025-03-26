import { Client, ClientOptions, getClient } from "@typespec/ts-http-runtime";

export interface OwnersClientContext extends Client {

}export interface OwnersClientOptions extends ClientOptions {
  endpoint?: string;
}export function createOwnersClientContext(
  endpoint: string,
  options?: OwnersClientOptions,): OwnersClientContext {
  const params: Record<string, any> = {
    endpoint: endpoint
  };
  const resolvedEndpoint = "{endpoint}".replace(/{([^}]+)}/g, (_, key) =>
    key in params ? String(params[key]) : (() => { throw new Error(`Missing parameter: ${key}`); })()
  );;return getClient(resolvedEndpoint,{
    ...options,
  })
}