// Licensed under the MIT License.

import { GetitdoneContext } from "../../api/getitdoneContext.js";
import { createLabel, getPersonalLabels } from "../../api/labels/index.js";
import {
  LabelsCreateLabelOptionalParams,
  LabelsGetPersonalLabelsOptionalParams,
} from "../../api/options.js";
import { Label, CreateLabelRequest } from "../../models/models.js";
import {
  LabelsLabelOpsOperations,
  getLabelsLabelOpsOperations,
} from "./labelOps/index.js";
import {
  LabelsSharedLabelsOperations,
  getLabelsSharedLabelsOperations,
} from "./sharedLabels/index.js";

/** Interface representing a Labels operations. */
export interface LabelsOperations {
  createLabel: (
    body: CreateLabelRequest,
    options?: LabelsCreateLabelOptionalParams,
  ) => Promise<Label>;
  getPersonalLabels: (
    options?: LabelsGetPersonalLabelsOptionalParams,
  ) => Promise<Label[]>;
  sharedLabels: LabelsSharedLabelsOperations;
  labelOps: LabelsLabelOpsOperations;
}

export function getLabels(context: GetitdoneContext) {
  return {
    createLabel: (
      body: CreateLabelRequest,
      options?: LabelsCreateLabelOptionalParams,
    ) => createLabel(context, body, options),
    getPersonalLabels: (options?: LabelsGetPersonalLabelsOptionalParams) =>
      getPersonalLabels(context, options),
  };
}

export function getLabelsOperations(
  context: GetitdoneContext,
): LabelsOperations {
  return {
    ...getLabels(context),
    sharedLabels: getLabelsSharedLabelsOperations(context),
    labelOps: getLabelsLabelOpsOperations(context),
  };
}
