import { Client, ClientOptions, getClient } from "@typespec/ts-http-runtime";

export interface PetStoreClientContext extends Client {

}export interface PetStoreClientOptions extends ClientOptions {
  endpoint?: string;
}export function createPetStoreClientContext(
  endpoint: string,
  options?: PetStoreClientOptions,): PetStoreClientContext {
  const params: Record<string, any> = {
    endpoint: endpoint
  };
  const resolvedEndpoint = "{endpoint}".replace(/{([^}]+)}/g, (_, key) =>
    key in params ? String(params[key]) : (() => { throw new Error(`Missing parameter: ${key}`); })()
  );;return getClient(resolvedEndpoint,{
    ...options,
  })
}