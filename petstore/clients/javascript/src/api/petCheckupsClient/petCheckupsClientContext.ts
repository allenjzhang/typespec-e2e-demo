import { Client, ClientOptions, getClient } from "@typespec/ts-http-runtime";

export interface PetCheckupsClientContext extends Client {

}export interface PetCheckupsClientOptions extends ClientOptions {
  endpoint?: string;
}export function createPetCheckupsClientContext(
  endpoint: string,
  options?: PetCheckupsClientOptions,): PetCheckupsClientContext {
  const params: Record<string, any> = {
    endpoint: endpoint
  };
  const resolvedEndpoint = "{endpoint}".replace(/{([^}]+)}/g, (_, key) =>
    key in params ? String(params[key]) : (() => { throw new Error(`Missing parameter: ${key}`); })()
  );;return getClient(resolvedEndpoint,{
    ...options,
  })
}