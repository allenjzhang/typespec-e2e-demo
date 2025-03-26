import { Insurance, ResourceCreateOrUpdateModel_3 } from "../../models/models.js";
import { parse } from "uri-template";
import { jsonInsuranceToApplicationTransform, jsonResourceCreateOrUpdateModelToTransportTransform_3 } from "../../models/serializers.js";
import { PetInsuranceClientContext } from "./petInsuranceClientContext.js";
import { OperationOptions } from "../../helpers/interfaces.js";
import { createRestError } from "../../helpers/error.js";

export interface GetOptions extends OperationOptions {

}export async function get(
  client: PetInsuranceClientContext,
  petId: number,
  options?: GetOptions,): Promise<Insurance> {
  const path = parse("/pets/{petId}/insurance").expand({
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
    return jsonInsuranceToApplicationTransform(response.body)!;
  }throw createRestError(response);
};
export interface UpdateOptions extends OperationOptions {

}export async function update(
  client: PetInsuranceClientContext,
  petId: number,
  properties: ResourceCreateOrUpdateModel_3,
  options?: UpdateOptions,): Promise<Insurance> {
  const path = parse("/pets/{petId}/insurance").expand({
    "petId": petId
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