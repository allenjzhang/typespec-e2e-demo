import { Toy, CollectionWithNextLink_3 } from "../../models/models.js";
import { parse } from "uri-template";
import { jsonToyToApplicationTransform, jsonCollectionWithNextLinkToApplicationTransform_3 } from "../../models/serializers.js";
import { ToysClientContext } from "./toysClientContext.js";
import { OperationOptions } from "../../helpers/interfaces.js";
import { createRestError } from "../../helpers/error.js";

export interface GetOptions extends OperationOptions {

}export async function get(
  client: ToysClientContext,
  petId: number,
  toyId: bigint,
  options?: GetOptions,): Promise<Toy> {
  const path = parse("/pets/{petId}/toys/{toyId}").expand({
    "petId": petId,
    "toyId": toyId
  });
  const httpRequestOptions = {
    headers: {

    },
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions)

  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  ;if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonToyToApplicationTransform(response.body)!;
  }throw createRestError(response);
};
export interface ListOptions extends OperationOptions {

}export async function list(
  client: ToysClientContext,
  petId: number,
  nameFilter: string,
  options?: ListOptions,): Promise<CollectionWithNextLink_3> {
  const path = parse("/pets/{petId}/toys{?nameFilter}").expand({
    "petId": petId,
    "nameFilter": nameFilter
  });
  const httpRequestOptions = {
    headers: {

    },
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions)

  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  ;if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonCollectionWithNextLinkToApplicationTransform_3(response.body)!;
  }throw createRestError(response);
};