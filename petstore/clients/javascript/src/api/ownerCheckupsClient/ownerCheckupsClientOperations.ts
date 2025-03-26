import { ResourceCreateOrUpdateModel_2, Checkup, CollectionWithNextLink_2 } from "../../models/models.js";
import { parse } from "uri-template";
import { jsonResourceCreateOrUpdateModelToTransportTransform_2, jsonCheckupToApplicationTransform, jsonCollectionWithNextLinkToApplicationTransform_2 } from "../../models/serializers.js";
import { OwnerCheckupsClientContext } from "./ownerCheckupsClientContext.js";
import { OperationOptions } from "../../helpers/interfaces.js";
import { createRestError } from "../../helpers/error.js";

export interface CreateOrUpdateOptions extends OperationOptions {
  vetName?: string
  notes?: string
}export async function createOrUpdate(
  client: OwnerCheckupsClientContext,
  ownerId: bigint,
  checkupId: number,
  resource: ResourceCreateOrUpdateModel_2,
  options?: CreateOrUpdateOptions,): Promise<Checkup> {
  const path = parse("/owners/{ownerId}/checkups/{checkupId}").expand({
    "ownerId": ownerId,
    "checkupId": checkupId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonResourceCreateOrUpdateModelToTransportTransform_2(resource),
  };
  const response = await client.pathUnchecked(path).patch(httpRequestOptions)

  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  ;if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonCheckupToApplicationTransform(response.body)!;
  }
  if (+response.status === 201 && response.headers["content-type"]?.includes("application/json")) {
    return jsonCheckupToApplicationTransform(response.body)!;
  }throw createRestError(response);
};
export interface ListOptions extends OperationOptions {

}export async function list(
  client: OwnerCheckupsClientContext,
  ownerId: bigint,
  options?: ListOptions,): Promise<CollectionWithNextLink_2> {
  const path = parse("/owners/{ownerId}/checkups").expand({
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
    return jsonCollectionWithNextLinkToApplicationTransform_2(response.body)!;
  }throw createRestError(response);
};