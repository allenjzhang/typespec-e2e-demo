// Licensed under the MIT License.

import { PetStoreContext } from "../../api/petStoreContext.js";
import { list, createOrUpdate } from "../../api/petCheckups/index.js";
import {
  CheckupUpdate,
  Checkup,
  CheckupCollectionWithNextLink,
} from "../../models/models.js";
import {
  PetCheckupsListOptionalParams,
  PetCheckupsCreateOrUpdateOptionalParams,
} from "../../api/options.js";

/** Interface representing a PetCheckups operations. */
export interface PetCheckupsOperations {
  /** Lists all instances of the extension resource. */
  list: (
    petId: number,
    options?: PetCheckupsListOptionalParams,
  ) => Promise<CheckupCollectionWithNextLink>;
  /** Creates or update an instance of the extension resource. */
  createOrUpdate: (
    petId: number,
    checkupId: number,
    resource: CheckupUpdate,
    options?: PetCheckupsCreateOrUpdateOptionalParams,
  ) => Promise<Checkup>;
}

export function getPetCheckups(context: PetStoreContext) {
  return {
    list: (petId: number, options?: PetCheckupsListOptionalParams) =>
      list(context, petId, options),
    createOrUpdate: (
      petId: number,
      checkupId: number,
      resource: CheckupUpdate,
      options?: PetCheckupsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, petId, checkupId, resource, options),
  };
}

export function getPetCheckupsOperations(
  context: PetStoreContext,
): PetCheckupsOperations {
  return {
    ...getPetCheckups(context),
  };
}
