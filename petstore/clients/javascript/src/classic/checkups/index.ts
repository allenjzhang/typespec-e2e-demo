// Licensed under the MIT License.

import { PetStoreContext } from "../../api/petStoreContext.js";
import { list, createOrUpdate } from "../../api/checkups/index.js";
import {
  CheckupUpdate,
  Checkup,
  CheckupCollectionWithNextLink,
} from "../../models/models.js";
import {
  CheckupsListOptionalParams,
  CheckupsCreateOrUpdateOptionalParams,
} from "../../api/options.js";

/** Interface representing a Checkups operations. */
export interface CheckupsOperations {
  /** Lists all instances of the resource. */
  list: (
    options?: CheckupsListOptionalParams,
  ) => Promise<CheckupCollectionWithNextLink>;
  /** Creates or update an instance of the resource. */
  createOrUpdate: (
    checkupId: number,
    resource: CheckupUpdate,
    options?: CheckupsCreateOrUpdateOptionalParams,
  ) => Promise<Checkup>;
}

function _getCheckups(context: PetStoreContext) {
  return {
    list: (options?: CheckupsListOptionalParams) => list(context, options),
    createOrUpdate: (
      checkupId: number,
      resource: CheckupUpdate,
      options?: CheckupsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, checkupId, resource, options),
  };
}

export function _getCheckupsOperations(
  context: PetStoreContext,
): CheckupsOperations {
  return {
    ..._getCheckups(context),
  };
}
