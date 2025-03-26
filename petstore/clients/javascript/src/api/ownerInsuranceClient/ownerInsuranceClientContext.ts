import { Client, ClientOptions, getClient } from "@typespec/ts-http-runtime";

export interface OwnerInsuranceClientContext extends Client {

}export interface OwnerInsuranceClientOptions extends ClientOptions {
  endpoint?: string;
}export function createOwnerInsuranceClientContext(
  endpoint: string,
  options?: OwnerInsuranceClientOptions,): OwnerInsuranceClientContext {
  const params: Record<string, any> = {
    endpoint: endpoint
  };
  const resolvedEndpoint = "{endpoint}".replace(/{([^}]+)}/g, (_, key) =>
    key in params ? String(params[key]) : (() => { throw new Error(`Missing parameter: ${key}`); })()
  );;return getClient(resolvedEndpoint,{
    ...options,
  })
}