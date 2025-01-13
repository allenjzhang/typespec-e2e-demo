// Licensed under the MIT License.

import {
  GetitdoneContext as Client,
  LabelsCreateLabelOptionalParams,
  LabelsGetPersonalLabelsOptionalParams,
} from "../index.js";
import {
  Label,
  labelDeserializer,
  CreateLabelRequest,
  createLabelRequestSerializer,
  labelArrayDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _createLabelSend(
  context: Client,
  body: CreateLabelRequest,
  options: LabelsCreateLabelOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/labels")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: createLabelRequestSerializer(body),
    });
}

export async function _createLabelDeserialize(
  result: PathUncheckedResponse,
): Promise<Label> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return labelDeserializer(result.body);
}

export async function createLabel(
  context: Client,
  body: CreateLabelRequest,
  options: LabelsCreateLabelOptionalParams = { requestOptions: {} },
): Promise<Label> {
  const result = await _createLabelSend(context, body, options);
  return _createLabelDeserialize(result);
}

export function _getPersonalLabelsSend(
  context: Client,
  options: LabelsGetPersonalLabelsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/labels")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getPersonalLabelsDeserialize(
  result: PathUncheckedResponse,
): Promise<Label[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return labelArrayDeserializer(result.body);
}

export async function getPersonalLabels(
  context: Client,
  options: LabelsGetPersonalLabelsOptionalParams = { requestOptions: {} },
): Promise<Label[]> {
  const result = await _getPersonalLabelsSend(context, options);
  return _getPersonalLabelsDeserialize(result);
}
