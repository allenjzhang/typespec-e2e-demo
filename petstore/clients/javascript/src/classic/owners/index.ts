// Licensed under the MIT License.

import { PetStoreContext } from "../../api/petStoreContext.js";
import { list, create, $delete, update, get } from "../../api/owners/index.js";
import {
  Owner,
  OwnerUpdate,
  OwnerCreate,
  OwnerCollectionWithNextLink,
} from "../../models/models.js";
import {
  OwnersListOptionalParams,
  OwnersCreateOptionalParams,
  OwnersDeleteOptionalParams,
  OwnersUpdateOptionalParams,
  OwnersGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a Owners operations. */
export interface OwnersOperations {
  /** Lists all instances of the resource. */
  list: (
    options?: OwnersListOptionalParams,
  ) => Promise<OwnerCollectionWithNextLink>;
  /** Creates a new instance of the resource. */
  create: (
    resource: OwnerCreate,
    options?: OwnersCreateOptionalParams,
  ) => Promise<Owner>;
  /** Deletes an existing instance of the resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    ownerId: number,
    options?: OwnersDeleteOptionalParams,
  ) => Promise<void>;
  /** Updates an existing instance of the resource. */
  update: (
    ownerId: number,
    properties: OwnerUpdate,
    options?: OwnersUpdateOptionalParams,
  ) => Promise<Owner>;
  /** Gets an instance of the resource. */
  get: (ownerId: number, options?: OwnersGetOptionalParams) => Promise<Owner>;
}

export function getOwners(context: PetStoreContext) {
  return {
    list: (options?: OwnersListOptionalParams) => list(context, options),
    create: (resource: OwnerCreate, options?: OwnersCreateOptionalParams) =>
      create(context, resource, options),
    delete: (ownerId: number, options?: OwnersDeleteOptionalParams) =>
      $delete(context, ownerId, options),
    update: (
      ownerId: number,
      properties: OwnerUpdate,
      options?: OwnersUpdateOptionalParams,
    ) => update(context, ownerId, properties, options),
    get: (ownerId: number, options?: OwnersGetOptionalParams) =>
      get(context, ownerId, options),
  };
}

export function getOwnersOperations(
  context: PetStoreContext,
): OwnersOperations {
  return {
    ...getOwners(context),
  };
}
