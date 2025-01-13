// Licensed under the MIT License.

import { GetitdoneContext } from "../../api/getitdoneContext.js";
import {
  SectionsCreateSectionOptionalParams,
  SectionsGetSectionsOptionalParams,
} from "../../api/options.js";
import { createSection, getSections } from "../../api/sections/index.js";
import { Section, CreateSectionRequest } from "../../models/models.js";
import {
  SectionsSectionOpsOperations,
  getSectionsSectionOpsOperations,
} from "./sectionOps/index.js";

/** Interface representing a Sections operations. */
export interface SectionsOperations {
  createSection: (
    body: CreateSectionRequest,
    options?: SectionsCreateSectionOptionalParams,
  ) => Promise<Section>;
  getSections: (
    projectId: string,
    options?: SectionsGetSectionsOptionalParams,
  ) => Promise<Section[]>;
  sectionOps: SectionsSectionOpsOperations;
}

function _getSections(context: GetitdoneContext) {
  return {
    createSection: (
      body: CreateSectionRequest,
      options?: SectionsCreateSectionOptionalParams,
    ) => createSection(context, body, options),
    getSections: (
      projectId: string,
      options?: SectionsGetSectionsOptionalParams,
    ) => getSections(context, projectId, options),
  };
}

export function getSectionsOperations(
  context: GetitdoneContext,
): SectionsOperations {
  return {
    ..._getSections(context),
    sectionOps: getSectionsSectionOpsOperations(context),
  };
}
