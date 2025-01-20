// Licensed under the MIT License.

import {
  PetStoreContext as Client,
  ToysGetOptionalParams,
  ToysListOptionalParams,
} from "../index.js";
import {
  petStoreErrorDeserializer,
  Toy,
  toyDeserializer,
  ToyCollectionWithNextLink,
  toyCollectionWithNextLinkDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _listSend(
  context: Client,
  petId: number,
  nameFilter: string,
  options: ToysListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pets/{petId}/toys", petId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { nameFilter: nameFilter },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<ToyCollectionWithNextLink> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = petStoreErrorDeserializer(result.body);
    throw error;
  }

  return toyCollectionWithNextLinkDeserializer(result.body);
}

export async function list(
  context: Client,
  petId: number,
  nameFilter: string,
  options: ToysListOptionalParams = { requestOptions: {} },
): Promise<ToyCollectionWithNextLink> {
  const result = await _listSend(context, petId, nameFilter, options);
  return _listDeserialize(result);
}

export function _getSend(
  context: Client,
  petId: number,
  toyId: number,
  options: ToysGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pets/{petId}/toys/{toyId}", petId, toyId)
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
): Promise<Toy> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = petStoreErrorDeserializer(result.body);
    throw error;
  }

  return toyDeserializer(result.body);
}

/** Gets an instance of the resource. */
export async function get(
  context: Client,
  petId: number,
  toyId: number,
  options: ToysGetOptionalParams = { requestOptions: {} },
): Promise<Toy> {
  const result = await _getSend(context, petId, toyId, options);
  return _getDeserialize(result);
}
