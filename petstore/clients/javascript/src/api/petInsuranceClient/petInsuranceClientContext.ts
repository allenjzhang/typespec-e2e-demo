import { Client, ClientOptions, getClient } from "@typespec/ts-http-runtime";

export interface PetInsuranceClientContext extends Client {

}export interface PetInsuranceClientOptions extends ClientOptions {
  endpoint?: string;
}export function createPetInsuranceClientContext(
  endpoint: string,
  options?: PetInsuranceClientOptions,): PetInsuranceClientContext {
  const params: Record<string, any> = {
    endpoint: endpoint
  };
  const resolvedEndpoint = "{endpoint}".replace(/{([^}]+)}/g, (_, key) =>
    key in params ? String(params[key]) : (() => { throw new Error(`Missing parameter: ${key}`); })()
  );;return getClient(resolvedEndpoint,{
    ...options,
  })
}