// Licensed under the MIT License.

import {
  PetStoreContext as Client,
  PetCheckupsCreateOrUpdateOptionalParams,
  PetCheckupsListOptionalParams,
} from "../index.js";
import {
  petStoreErrorDeserializer,
  Checkup,
  checkupDeserializer,
} from "../../models/models.js";
import {
  CheckupUpdate,
  checkupUpdateSerializer,
  CheckupCollectionWithNextLink,
  checkupCollectionWithNextLinkDeserializer,
} from "../../models/typeSpec/rest/resource/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _listSend(
  context: Client,
  petId: number,
  options: PetCheckupsListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pets/{petId}/checkups", petId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckupCollectionWithNextLink> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = petStoreErrorDeserializer(result.body);
    throw error;
  }

  return checkupCollectionWithNextLinkDeserializer(result.body);
}

/** Lists all instances of the extension resource. */
export async function list(
  context: Client,
  petId: number,
  options: PetCheckupsListOptionalParams = { requestOptions: {} },
): Promise<CheckupCollectionWithNextLink> {
  const result = await _listSend(context, petId, options);
  return _listDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  petId: number,
  checkupId: number,
  resource: CheckupUpdate,
  options: PetCheckupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/pets/{petId}/checkups/{checkupId}", petId, checkupId)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: checkupUpdateSerializer(resource),
    });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Checkup> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = petStoreErrorDeserializer(result.body);
    throw error;
  }

  return checkupDeserializer(result.body);
}

/** Creates or update an instance of the extension resource. */
export async function createOrUpdate(
  context: Client,
  petId: number,
  checkupId: number,
  resource: CheckupUpdate,
  options: PetCheckupsCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<Checkup> {
  const result = await _createOrUpdateSend(
    context,
    petId,
    checkupId,
    resource,
    options,
  );
  return _createOrUpdateDeserialize(result);
}
