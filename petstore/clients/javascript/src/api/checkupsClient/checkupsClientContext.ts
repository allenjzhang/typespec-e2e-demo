import { Client, ClientOptions, getClient } from "@typespec/ts-http-runtime";

export interface CheckupsClientContext extends Client {

}export interface CheckupsClientOptions extends ClientOptions {
  endpoint?: string;
}export function createCheckupsClientContext(
  endpoint: string,
  options?: CheckupsClientOptions,): CheckupsClientContext {
  const params: Record<string, any> = {
    endpoint: endpoint
  };
  const resolvedEndpoint = "{endpoint}".replace(/{([^}]+)}/g, (_, key) =>
    key in params ? String(params[key]) : (() => { throw new Error(`Missing parameter: ${key}`); })()
  );;return getClient(resolvedEndpoint,{
    ...options,
  })
}