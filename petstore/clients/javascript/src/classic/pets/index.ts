// Licensed under the MIT License.

import {
  PetsListOptionalParams,
  PetsCreateOptionalParams,
  PetsDeleteOptionalParams,
  PetsUpdateOptionalParams,
  PetsGetOptionalParams,
} from "../../api/options.js";
import { PetStoreContext } from "../../api/petStoreContext.js";
import { list, create, $delete, update, get } from "../../api/pets/index.js";
import { Pet } from "../../models/models.js";
import {
  PetUpdate,
  PetCreate,
  PetCollectionWithNextLink,
} from "../../models/typeSpec/rest/resource/models.js";

/** Interface representing a Pets operations. */
export interface PetsOperations {
  /** Lists all instances of the resource. */
  list: (
    options?: PetsListOptionalParams,
  ) => Promise<PetCollectionWithNextLink>;
  /** Creates a new instance of the resource. */
  create: (
    resource: PetCreate,
    options?: PetsCreateOptionalParams,
  ) => Promise<Pet>;
  /** Deletes an existing instance of the resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (petId: number, options?: PetsDeleteOptionalParams) => Promise<void>;
  /** Updates an existing instance of the resource. */
  update: (
    petId: number,
    properties: PetUpdate,
    options?: PetsUpdateOptionalParams,
  ) => Promise<Pet>;
  /** Gets an instance of the resource. */
  get: (petId: number, options?: PetsGetOptionalParams) => Promise<Pet>;
}

function _getPets(context: PetStoreContext) {
  return {
    list: (options?: PetsListOptionalParams) => list(context, options),
    create: (resource: PetCreate, options?: PetsCreateOptionalParams) =>
      create(context, resource, options),
    delete: (petId: number, options?: PetsDeleteOptionalParams) =>
      $delete(context, petId, options),
    update: (
      petId: number,
      properties: PetUpdate,
      options?: PetsUpdateOptionalParams,
    ) => update(context, petId, properties, options),
    get: (petId: number, options?: PetsGetOptionalParams) =>
      get(context, petId, options),
  };
}

export function _getPetsOperations(context: PetStoreContext): PetsOperations {
  return {
    ..._getPets(context),
  };
}
