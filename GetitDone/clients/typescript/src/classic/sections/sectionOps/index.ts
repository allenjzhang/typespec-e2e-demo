// Licensed under the MIT License.

import { GetitdoneContext } from "../../../api/getitdoneContext.js";
import {
  SectionsSectionOpsDeleteSectionOptionalParams,
  SectionsSectionOpsUpdateSectionOptionalParams,
  SectionsSectionOpsGetSectionOptionalParams,
} from "../../../api/options.js";
import {
  deleteSection,
  updateSection,
  getSection,
} from "../../../api/sections/sectionOps/index.js";
import { Section, UpdateSectionRequest } from "../../../models/models.js";

/** Interface representing a SectionsSectionOps operations. */
export interface SectionsSectionOpsOperations {
  deleteSection: (
    sectionId: string,
    options?: SectionsSectionOpsDeleteSectionOptionalParams,
  ) => Promise<void>;
  updateSection: (
    sectionId: string,
    body: UpdateSectionRequest,
    options?: SectionsSectionOpsUpdateSectionOptionalParams,
  ) => Promise<Section>;
  getSection: (
    sectionId: string,
    options?: SectionsSectionOpsGetSectionOptionalParams,
  ) => Promise<Section>;
}

export function getSectionsSectionOps(context: GetitdoneContext) {
  return {
    deleteSection: (
      sectionId: string,
      options?: SectionsSectionOpsDeleteSectionOptionalParams,
    ) => deleteSection(context, sectionId, options),
    updateSection: (
      sectionId: string,
      body: UpdateSectionRequest,
      options?: SectionsSectionOpsUpdateSectionOptionalParams,
    ) => updateSection(context, sectionId, body, options),
    getSection: (
      sectionId: string,
      options?: SectionsSectionOpsGetSectionOptionalParams,
    ) => getSection(context, sectionId, options),
  };
}

export function getSectionsSectionOpsOperations(
  context: GetitdoneContext,
): SectionsSectionOpsOperations {
  return {
    ...getSectionsSectionOps(context),
  };
}
