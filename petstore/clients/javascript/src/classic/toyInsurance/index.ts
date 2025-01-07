// Licensed under the MIT License.

import {
  ToyInsuranceUpdateOptionalParams,
  ToyInsuranceGetOptionalParams,
} from "../../api/options.js";
import { PetStoreContext } from "../../api/petStoreContext.js";
import { update, get } from "../../api/toyInsurance/index.js";
import { Insurance, InsuranceUpdate } from "../../models/models.js";

/** Interface representing a ToyInsurance operations. */
export interface ToyInsuranceOperations {
  /** Updates the singleton resource. */
  update: (
    petId: number,
    toyId: number,
    properties: InsuranceUpdate,
    options?: ToyInsuranceUpdateOptionalParams,
  ) => Promise<Insurance>;
  /** Gets the singleton resource. */
  get: (
    petId: number,
    toyId: number,
    options?: ToyInsuranceGetOptionalParams,
  ) => Promise<Insurance>;
}

export function getToyInsurance(context: PetStoreContext) {
  return {
    update: (
      petId: number,
      toyId: number,
      properties: InsuranceUpdate,
      options?: ToyInsuranceUpdateOptionalParams,
    ) => update(context, petId, toyId, properties, options),
    get: (
      petId: number,
      toyId: number,
      options?: ToyInsuranceGetOptionalParams,
    ) => get(context, petId, toyId, options),
  };
}

export function getToyInsuranceOperations(
  context: PetStoreContext,
): ToyInsuranceOperations {
  return {
    ...getToyInsurance(context),
  };
}
