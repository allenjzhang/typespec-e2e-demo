// Licensed under the MIT License.

import { PetStoreContext } from "../../api/petStoreContext.js";
import { update, get } from "../../api/ownerInsurance/index.js";
import { Insurance, InsuranceUpdate } from "../../models/models.js";
import {
  OwnerInsuranceUpdateOptionalParams,
  OwnerInsuranceGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a OwnerInsurance operations. */
export interface OwnerInsuranceOperations {
  /** Updates the singleton resource. */
  update: (
    ownerId: number,
    properties: InsuranceUpdate,
    options?: OwnerInsuranceUpdateOptionalParams,
  ) => Promise<Insurance>;
  /** Gets the singleton resource. */
  get: (
    ownerId: number,
    options?: OwnerInsuranceGetOptionalParams,
  ) => Promise<Insurance>;
}

function _getOwnerInsurance(context: PetStoreContext) {
  return {
    update: (
      ownerId: number,
      properties: InsuranceUpdate,
      options?: OwnerInsuranceUpdateOptionalParams,
    ) => update(context, ownerId, properties, options),
    get: (ownerId: number, options?: OwnerInsuranceGetOptionalParams) =>
      get(context, ownerId, options),
  };
}

export function _getOwnerInsuranceOperations(
  context: PetStoreContext,
): OwnerInsuranceOperations {
  return {
    ..._getOwnerInsurance(context),
  };
}
