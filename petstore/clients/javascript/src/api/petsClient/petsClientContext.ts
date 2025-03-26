import { Client, ClientOptions, getClient } from "@typespec/ts-http-runtime";

export interface PetsClientContext extends Client {

}export interface PetsClientOptions extends ClientOptions {
  endpoint?: string;
}export function createPetsClientContext(
  endpoint: string,
  options?: PetsClientOptions,): PetsClientContext {
  const params: Record<string, any> = {
    endpoint: endpoint
  };
  const resolvedEndpoint = "{endpoint}".replace(/{([^}]+)}/g, (_, key) =>
    key in params ? String(params[key]) : (() => { throw new Error(`Missing parameter: ${key}`); })()
  );;return getClient(resolvedEndpoint,{
    ...options,
  })
}