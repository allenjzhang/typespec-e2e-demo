import { Pet, ResourceCreateOrUpdateModel, ResourceCreateModel, CollectionWithNextLink } from "../../models/models.js";
import { parse } from "uri-template";
import { jsonPetToApplicationTransform, jsonResourceCreateOrUpdateModelToTransportTransform, jsonResourceCreateModelToTransportTransform, jsonCollectionWithNextLinkToApplicationTransform } from "../../models/serializers.js";
import { PetsClientContext } from "./petsClientContext.js";
import { OperationOptions } from "../../helpers/interfaces.js";
import { createRestError } from "../../helpers/error.js";

export interface GetOptions extends OperationOptions {

}export async function get(
  client: PetsClientContext,
  petId: number,
  options?: GetOptions,): Promise<Pet> {
  const path = parse("/pets/{petId}").expand({
    "petId": petId
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
    return jsonPetToApplicationTransform(response.body)!;
  }throw createRestError(response);
};
export interface UpdateOptions extends OperationOptions {
  name?: string
  tag?: string
  age?: number
  ownerId?: bigint
}export async function update(
  client: PetsClientContext,
  petId: number,
  properties: ResourceCreateOrUpdateModel,
  options?: UpdateOptions,): Promise<Pet> {
  const path = parse("/pets/{petId}").expand({
    "petId": petId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonResourceCreateOrUpdateModelToTransportTransform(properties),
  };
  const response = await client.pathUnchecked(path).patch(httpRequestOptions)

  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  ;if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonPetToApplicationTransform(response.body)!;
  }throw createRestError(response);
};
export interface DeleteOptions extends OperationOptions {

}export async function delete_(
  client: PetsClientContext,
  petId: number,
  options?: DeleteOptions,): Promise<void> {
  const path = parse("/pets/{petId}").expand({
    "petId": petId
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
  tag?: string
}export async function create(
  client: PetsClientContext,
  resource: ResourceCreateModel,
  options?: CreateOptions,): Promise<Pet> {
  const path = parse("/pets").expand({

  });
  const httpRequestOptions = {
    headers: {

    },body: jsonResourceCreateModelToTransportTransform(resource),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions)

  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  ;if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonPetToApplicationTransform(response.body)!;
  }
  if (+response.status === 201 && response.headers["content-type"]?.includes("application/json")) {
    return jsonPetToApplicationTransform(response.body)!;
  }throw createRestError(response);
};
export interface ListOptions extends OperationOptions {

}export async function list(
  client: PetsClientContext,
  options?: ListOptions,): Promise<CollectionWithNextLink> {
  const path = parse("/pets").expand({

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
    return jsonCollectionWithNextLinkToApplicationTransform(response.body)!;
  }throw createRestError(response);
};