import { Client, ClientOptions, getClient } from "@typespec/ts-http-runtime";

export interface ToyInsuranceClientContext extends Client {

}export interface ToyInsuranceClientOptions extends ClientOptions {
  endpoint?: string;
}export function createToyInsuranceClientContext(
  endpoint: string,
  options?: ToyInsuranceClientOptions,): ToyInsuranceClientContext {
  const params: Record<string, any> = {
    endpoint: endpoint
  };
  const resolvedEndpoint = "{endpoint}".replace(/{([^}]+)}/g, (_, key) =>
    key in params ? String(params[key]) : (() => { throw new Error(`Missing parameter: ${key}`); })()
  );;return getClient(resolvedEndpoint,{
    ...options,
  })
}