// Licensed under the MIT License.

import { GetitdoneContext } from "../../../api/getitdoneContext.js";
import {
  removeSharedLabel,
  renameSharedLabel,
  getSharedLabels,
} from "../../../api/labels/sharedLabels/index.js";
import {
  LabelsSharedLabelsRemoveSharedLabelOptionalParams,
  LabelsSharedLabelsRenameSharedLabelOptionalParams,
  LabelsSharedLabelsGetSharedLabelsOptionalParams,
} from "../../../api/options.js";
import {
  Label,
  RenameSharedLabelRequest,
  RemoveSharedLabelRequest,
} from "../../../models/models.js";

/** Interface representing a LabelsSharedLabels operations. */
export interface LabelsSharedLabelsOperations {
  removeSharedLabel: (
    body: RemoveSharedLabelRequest,
    options?: LabelsSharedLabelsRemoveSharedLabelOptionalParams,
  ) => Promise<void>;
  renameSharedLabel: (
    body: RenameSharedLabelRequest,
    options?: LabelsSharedLabelsRenameSharedLabelOptionalParams,
  ) => Promise<void>;
  getSharedLabels: (
    options?: LabelsSharedLabelsGetSharedLabelsOptionalParams,
  ) => Promise<Label[]>;
}

export function getLabelsSharedLabels(context: GetitdoneContext) {
  return {
    removeSharedLabel: (
      body: RemoveSharedLabelRequest,
      options?: LabelsSharedLabelsRemoveSharedLabelOptionalParams,
    ) => removeSharedLabel(context, body, options),
    renameSharedLabel: (
      body: RenameSharedLabelRequest,
      options?: LabelsSharedLabelsRenameSharedLabelOptionalParams,
    ) => renameSharedLabel(context, body, options),
    getSharedLabels: (
      options?: LabelsSharedLabelsGetSharedLabelsOptionalParams,
    ) => getSharedLabels(context, options),
  };
}

export function getLabelsSharedLabelsOperations(
  context: GetitdoneContext,
): LabelsSharedLabelsOperations {
  return {
    ...getLabelsSharedLabels(context),
  };
}
