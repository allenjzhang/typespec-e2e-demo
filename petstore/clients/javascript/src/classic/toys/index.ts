// Licensed under the MIT License.

import {
  ToysListOptionalParams,
  ToysGetOptionalParams,
} from "../../api/options.js";
import { PetStoreContext } from "../../api/petStoreContext.js";
import { list, get } from "../../api/toys/index.js";
import { Toy, ToyCollectionWithNextLink } from "../../models/models.js";

/** Interface representing a Toys operations. */
export interface ToysOperations {
  list: (
    petId: number,
    nameFilter: string,
    options?: ToysListOptionalParams,
  ) => Promise<ToyCollectionWithNextLink>;
  /** Gets an instance of the resource. */
  get: (
    petId: number,
    toyId: number,
    options?: ToysGetOptionalParams,
  ) => Promise<Toy>;
}

function _getToys(context: PetStoreContext) {
  return {
    list: (
      petId: number,
      nameFilter: string,
      options?: ToysListOptionalParams,
    ) => list(context, petId, nameFilter, options),
    get: (petId: number, toyId: number, options?: ToysGetOptionalParams) =>
      get(context, petId, toyId, options),
  };
}

export function _getToysOperations(context: PetStoreContext): ToysOperations {
  return {
    ..._getToys(context),
  };
}
