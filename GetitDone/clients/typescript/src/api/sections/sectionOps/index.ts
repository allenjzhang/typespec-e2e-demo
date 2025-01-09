// Licensed under the MIT License.

import {
  GetitdoneContext as Client,
  SectionsSectionOpsDeleteSectionOptionalParams,
  SectionsSectionOpsGetSectionOptionalParams,
  SectionsSectionOpsUpdateSectionOptionalParams,
} from "../../index.js";
import {
  Section,
  sectionDeserializer,
  UpdateSectionRequest,
  updateSectionRequestSerializer,
} from "../../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _deleteSectionSend(
  context: Client,
  sectionId: string,
  options: SectionsSectionOpsDeleteSectionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/sections/{section_id}", sectionId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteSectionDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function deleteSection(
  context: Client,
  sectionId: string,
  options: SectionsSectionOpsDeleteSectionOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _deleteSectionSend(context, sectionId, options);
  return _deleteSectionDeserialize(result);
}

export function _updateSectionSend(
  context: Client,
  sectionId: string,
  body: UpdateSectionRequest,
  options: SectionsSectionOpsUpdateSectionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/sections/{section_id}", sectionId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: updateSectionRequestSerializer(body),
    });
}

export async function _updateSectionDeserialize(
  result: PathUncheckedResponse,
): Promise<Section> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return sectionDeserializer(result.body);
}

export async function updateSection(
  context: Client,
  sectionId: string,
  body: UpdateSectionRequest,
  options: SectionsSectionOpsUpdateSectionOptionalParams = {
    requestOptions: {},
  },
): Promise<Section> {
  const result = await _updateSectionSend(context, sectionId, body, options);
  return _updateSectionDeserialize(result);
}

export function _getSectionSend(
  context: Client,
  sectionId: string,
  options: SectionsSectionOpsGetSectionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/sections/{section_id}", sectionId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getSectionDeserialize(
  result: PathUncheckedResponse,
): Promise<Section> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return sectionDeserializer(result.body);
}

export async function getSection(
  context: Client,
  sectionId: string,
  options: SectionsSectionOpsGetSectionOptionalParams = { requestOptions: {} },
): Promise<Section> {
  const result = await _getSectionSend(context, sectionId, options);
  return _getSectionDeserialize(result);
}
