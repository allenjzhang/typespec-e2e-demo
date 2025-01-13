// Licensed under the MIT License.

import { GetitdoneContext } from "../../../api/getitdoneContext.js";
import {
  deleteLabel,
  updateLabel,
  getPersonalLabel,
} from "../../../api/labels/labelOps/index.js";
import {
  LabelsLabelOpsDeleteLabelOptionalParams,
  LabelsLabelOpsUpdateLabelOptionalParams,
  LabelsLabelOpsGetPersonalLabelOptionalParams,
} from "../../../api/options.js";
import { Label, UpdateLabelRequest } from "../../../models/models.js";

/** Interface representing a LabelsLabelOps operations. */
export interface LabelsLabelOpsOperations {
  deleteLabel: (
    labelId: string,
    options?: LabelsLabelOpsDeleteLabelOptionalParams,
  ) => Promise<void>;
  updateLabel: (
    labelId: string,
    body: UpdateLabelRequest,
    options?: LabelsLabelOpsUpdateLabelOptionalParams,
  ) => Promise<Label>;
  getPersonalLabel: (
    labelId: string,
    options?: LabelsLabelOpsGetPersonalLabelOptionalParams,
  ) => Promise<Label>;
}

export function getLabelsLabelOps(context: GetitdoneContext) {
  return {
    deleteLabel: (
      labelId: string,
      options?: LabelsLabelOpsDeleteLabelOptionalParams,
    ) => deleteLabel(context, labelId, options),
    updateLabel: (
      labelId: string,
      body: UpdateLabelRequest,
      options?: LabelsLabelOpsUpdateLabelOptionalParams,
    ) => updateLabel(context, labelId, body, options),
    getPersonalLabel: (
      labelId: string,
      options?: LabelsLabelOpsGetPersonalLabelOptionalParams,
    ) => getPersonalLabel(context, labelId, options),
  };
}

export function getLabelsLabelOpsOperations(
  context: GetitdoneContext,
): LabelsLabelOpsOperations {
  return {
    ...getLabelsLabelOps(context),
  };
}
