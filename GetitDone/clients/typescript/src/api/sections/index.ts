// Licensed under the MIT License.

import {
  GetitdoneContext as Client,
  SectionsCreateSectionOptionalParams,
  SectionsGetSectionsOptionalParams,
} from "../index.js";
import {
  Section,
  sectionDeserializer,
  CreateSectionRequest,
  createSectionRequestSerializer,
  sectionArrayDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _createSectionSend(
  context: Client,
  body: CreateSectionRequest,
  options: SectionsCreateSectionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/sections")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: createSectionRequestSerializer(body),
    });
}

export async function _createSectionDeserialize(
  result: PathUncheckedResponse,
): Promise<Section> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return sectionDeserializer(result.body);
}

export async function createSection(
  context: Client,
  body: CreateSectionRequest,
  options: SectionsCreateSectionOptionalParams = { requestOptions: {} },
): Promise<Section> {
  const result = await _createSectionSend(context, body, options);
  return _createSectionDeserialize(result);
}

export function _getSectionsSend(
  context: Client,
  projectId: string,
  options: SectionsGetSectionsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/sections")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { project_id: projectId },
    });
}

export async function _getSectionsDeserialize(
  result: PathUncheckedResponse,
): Promise<Section[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return sectionArrayDeserializer(result.body);
}

export async function getSections(
  context: Client,
  projectId: string,
  options: SectionsGetSectionsOptionalParams = { requestOptions: {} },
): Promise<Section[]> {
  const result = await _getSectionsSend(context, projectId, options);
  return _getSectionsDeserialize(result);
}
