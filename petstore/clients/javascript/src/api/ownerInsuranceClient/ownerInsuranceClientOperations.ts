import { Insurance, ResourceCreateOrUpdateModel_3 } from "../../models/models.js";
import { parse } from "uri-template";
import { jsonInsuranceToApplicationTransform, jsonResourceCreateOrUpdateModelToTransportTransform_3 } from "../../models/serializers.js";
import { OwnerInsuranceClientContext } from "./ownerInsuranceClientContext.js";
import { OperationOptions } from "../../helpers/interfaces.js";
import { createRestError } from "../../helpers/error.js";

export interface GetOptions extends OperationOptions {

}export async function get(
  client: OwnerInsuranceClientContext,
  ownerId: bigint,
  options?: GetOptions,): Promise<Insurance> {
  const path = parse("/owners/{ownerId}/insurance").expand({
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
    return jsonInsuranceToApplicationTransform(response.body)!;
  }throw createRestError(response);
};
export interface UpdateOptions extends OperationOptions {

}export async function update(
  client: OwnerInsuranceClientContext,
  ownerId: bigint,
  properties: ResourceCreateOrUpdateModel_3,
  options?: UpdateOptions,): Promise<Insurance> {
  const path = parse("/owners/{ownerId}/insurance").expand({
    "ownerId": ownerId
  });
  const httpRequestOptions = {
    headers: {

    },body: jsonResourceCreateOrUpdateModelToTransportTransform_3(properties),
  };
  const response = await client.pathUnchecked(path).patch(httpRequestOptions)

  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  ;if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonInsuranceToApplicationTransform(response.body)!;
  }throw createRestError(response);
};