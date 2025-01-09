// Licensed under the MIT License.

import {
  GetitdoneContext as Client,
  LabelsSharedLabelsGetSharedLabelsOptionalParams,
  LabelsSharedLabelsRemoveSharedLabelOptionalParams,
  LabelsSharedLabelsRenameSharedLabelOptionalParams,
} from "../../index.js";
import {
  Label,
  RenameSharedLabelRequest,
  renameSharedLabelRequestSerializer,
  RemoveSharedLabelRequest,
  removeSharedLabelRequestSerializer,
  labelArrayDeserializer,
} from "../../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _removeSharedLabelSend(
  context: Client,
  body: RemoveSharedLabelRequest,
  options: LabelsSharedLabelsRemoveSharedLabelOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/labels/shared/remove")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: removeSharedLabelRequestSerializer(body),
    });
}

export async function _removeSharedLabelDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function removeSharedLabel(
  context: Client,
  body: RemoveSharedLabelRequest,
  options: LabelsSharedLabelsRemoveSharedLabelOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _removeSharedLabelSend(context, body, options);
  return _removeSharedLabelDeserialize(result);
}

export function _renameSharedLabelSend(
  context: Client,
  body: RenameSharedLabelRequest,
  options: LabelsSharedLabelsRenameSharedLabelOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/labels/shared/rename")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      body: renameSharedLabelRequestSerializer(body),
    });
}

export async function _renameSharedLabelDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function renameSharedLabel(
  context: Client,
  body: RenameSharedLabelRequest,
  options: LabelsSharedLabelsRenameSharedLabelOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _renameSharedLabelSend(context, body, options);
  return _renameSharedLabelDeserialize(result);
}

export function _getSharedLabelsSend(
  context: Client,
  options: LabelsSharedLabelsGetSharedLabelsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/labels/shared")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getSharedLabelsDeserialize(
  result: PathUncheckedResponse,
): Promise<Label[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return labelArrayDeserializer(result.body);
}

export async function getSharedLabels(
  context: Client,
  options: LabelsSharedLabelsGetSharedLabelsOptionalParams = {
    requestOptions: {},
  },
): Promise<Label[]> {
  const result = await _getSharedLabelsSend(context, options);
  return _getSharedLabelsDeserialize(result);
}
