// Licensed under the MIT License.

import {
  PetStoreContext as Client,
  PetInsuranceGetOptionalParams,
  PetInsuranceUpdateOptionalParams,
} from "../index.js";
import {
  Insurance,
  insuranceDeserializer,
  petStoreErrorDeserializer,
} from "../../models/models.js";
import {
  InsuranceUpdate,
  insuranceUpdateSerializer,
} from "../../models/typeSpec/rest/resource/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _updateSend(
  context: Client,
  petId: number,
  properties: InsuranceUpdate,
  options: PetInsuranceUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pets/{petId}/insurance", petId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: insuranceUpdateSerializer(properties),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<Insurance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = petStoreErrorDeserializer(result.body);
    throw error;
  }

  return insuranceDeserializer(result.body);
}

/** Updates the singleton resource. */
export async function update(
  context: Client,
  petId: number,
  properties: InsuranceUpdate,
  options: PetInsuranceUpdateOptionalParams = { requestOptions: {} },
): Promise<Insurance> {
  const result = await _updateSend(context, petId, properties, options);
  return _updateDeserialize(result);
}

export function _getSend(
  context: Client,
  petId: number,
  options: PetInsuranceGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pets/{petId}/insurance", petId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<Insurance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = petStoreErrorDeserializer(result.body);
    throw error;
  }

  return insuranceDeserializer(result.body);
}

/** Gets the singleton resource. */
export async function get(
  context: Client,
  petId: number,
  options: PetInsuranceGetOptionalParams = { requestOptions: {} },
): Promise<Insurance> {
  const result = await _getSend(context, petId, options);
  return _getDeserialize(result);
}
