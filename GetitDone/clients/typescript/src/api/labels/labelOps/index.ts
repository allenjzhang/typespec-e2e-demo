// Licensed under the MIT License.

import {
  GetitdoneContext as Client,
  LabelsLabelOpsDeleteLabelOptionalParams,
  LabelsLabelOpsGetPersonalLabelOptionalParams,
  LabelsLabelOpsUpdateLabelOptionalParams,
} from "../../index.js";
import {
  Label,
  labelDeserializer,
  UpdateLabelRequest,
  updateLabelRequestSerializer,
} from "../../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _deleteLabelSend(
  context: Client,
  labelId: string,
  options: LabelsLabelOpsDeleteLabelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/labels/{label_id}", labelId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteLabelDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function deleteLabel(
  context: Client,
  labelId: string,
  options: LabelsLabelOpsDeleteLabelOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _deleteLabelSend(context, labelId, options);
  return _deleteLabelDeserialize(result);
}

export function _updateLabelSend(
  context: Client,
  labelId: string,
  body: UpdateLabelRequest,
  options: LabelsLabelOpsUpdateLabelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/labels/{label_id}", labelId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: updateLabelRequestSerializer(body),
    });
}

export async function _updateLabelDeserialize(
  result: PathUncheckedResponse,
): Promise<Label> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return labelDeserializer(result.body);
}

export async function updateLabel(
  context: Client,
  labelId: string,
  body: UpdateLabelRequest,
  options: LabelsLabelOpsUpdateLabelOptionalParams = { requestOptions: {} },
): Promise<Label> {
  const result = await _updateLabelSend(context, labelId, body, options);
  return _updateLabelDeserialize(result);
}

export function _getPersonalLabelSend(
  context: Client,
  labelId: string,
  options: LabelsLabelOpsGetPersonalLabelOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/labels/{label_id}", labelId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getPersonalLabelDeserialize(
  result: PathUncheckedResponse,
): Promise<Label> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return labelDeserializer(result.body);
}

export async function getPersonalLabel(
  context: Client,
  labelId: string,
  options: LabelsLabelOpsGetPersonalLabelOptionalParams = {
    requestOptions: {},
  },
): Promise<Label> {
  const result = await _getPersonalLabelSend(context, labelId, options);
  return _getPersonalLabelDeserialize(result);
}
