import { Owner, ResourceCreateOrUpdateModel_4, ResourceCreateModel_2, CollectionWithNextLink_4 } from "../../models/models.js";
import { parse } from "uri-template";
import { jsonOwnerToApplicationTransform, jsonResourceCreateOrUpdateModelToTransportTransform_4, jsonResourceCreateModelToTransportTransform_2, jsonCollectionWithNextLinkToApplicationTransform_4 } from "../../models/serializers.js";
import { OwnersClientContext } from "./ownersClientContext.js";
import { OperationOptions } from "../../helpers/interfaces.js";
import { createRestError } from "../../helpers/error.js";

export interface GetOptions extends OperationOptions {

}export async function get(
  client: OwnersClientContext,
  ownerId: bigint,
  options?: GetOptions,): Promise<Owner> {
  const path = parse("/owners/{ownerId}").expand({
    "ownerId": ownerId
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
    return jsonOwnerToApplicationTransform(response.body)!;
  }throw createRestError(response);
};
export interface UpdateOptions extends OperationOptions {
  name?: string
  age?: number
}export async function update(
  client: OwnersClientContext,
  ownerId: bigint,
  properties: ResourceCreateOrUpdateModel_4,
  options?: UpdateOptions,): Promise<Owner> {
  const path = parse("/owners/{ownerId}").expand({
    "ownerId": ownerId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonResourceCreateOrUpdateModelToTransportTransform_4(properties),
  };
  const response = await client.pathUnchecked(path).patch(httpRequestOptions)

  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  ;if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonOwnerToApplicationTransform(response.body)!;
  }throw createRestError(response);
};
export interface DeleteOptions extends OperationOptions {

}export async function delete_(
  client: OwnersClientContext,
  ownerId: bigint,
  options?: DeleteOptions,): Promise<void> {
  const path = parse("/owners/{ownerId}").expand({
    "ownerId": ownerId
  });
  const httpRequestOptions = {
    headers: {

    },
  };
  const response = await client.pathUnchecked(path).delete(httpRequestOptions)

  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  ;if (+response.status === 200 && !response.body) {
    return;
  }throw createRestError(response);
};
export interface CreateOptions extends OperationOptions {

}export async function create(
  client: OwnersClientContext,
  resource: ResourceCreateModel_2,
  options?: CreateOptions,): Promise<Owner> {
  const path = parse("/owners").expand({

  });
  const httpRequestOptions = {
    headers: {

    },body: jsonResourceCreateModelToTransportTransform_2(resource),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions)

  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  ;if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonOwnerToApplicationTransform(response.body)!;
  }
  if (+response.status === 201 && response.headers["content-type"]?.includes("application/json")) {
    return jsonOwnerToApplicationTransform(response.body)!;
  }throw createRestError(response);
};
export interface ListOptions extends OperationOptions {

}export async function list(
  client: OwnersClientContext,
  options?: ListOptions,): Promise<CollectionWithNextLink_4> {
  const path = parse("/owners").expand({

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
    return jsonCollectionWithNextLinkToApplicationTransform_4(response.body)!;
  }throw createRestError(response);
};