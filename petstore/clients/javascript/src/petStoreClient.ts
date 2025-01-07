// Licensed under the MIT License.

import {
  getOwnerInsuranceOperations,
  OwnerInsuranceOperations,
} from "./classic/ownerInsurance/index.js";
import {
  getOwnerCheckupsOperations,
  OwnerCheckupsOperations,
} from "./classic/ownerCheckups/index.js";
import {
  getOwnersOperations,
  OwnersOperations,
} from "./classic/owners/index.js";
import {
  getCheckupsOperations,
  CheckupsOperations,
} from "./classic/checkups/index.js";
import {
  getToyInsuranceOperations,
  ToyInsuranceOperations,
} from "./classic/toyInsurance/index.js";
import { getToysOperations, ToysOperations } from "./classic/toys/index.js";
import {
  getPetInsuranceOperations,
  PetInsuranceOperations,
} from "./classic/petInsurance/index.js";
import {
  getPetCheckupsOperations,
  PetCheckupsOperations,
} from "./classic/petCheckups/index.js";
import { getPetsOperations, PetsOperations } from "./classic/pets/index.js";
import {
  createPetStore,
  PetStoreContext,
  PetStoreClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@typespec/ts-http-runtime";

export { PetStoreClientOptionalParams } from "./api/petStoreContext.js";

export class PetStoreClient {
  private _client: PetStoreContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(
    endpointParam: string,
    options: PetStoreClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createPetStore(endpointParam, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.ownerInsurance = getOwnerInsuranceOperations(this._client);
    this.ownerCheckups = getOwnerCheckupsOperations(this._client);
    this.owners = getOwnersOperations(this._client);
    this.checkups = getCheckupsOperations(this._client);
    this.toyInsurance = getToyInsuranceOperations(this._client);
    this.toys = getToysOperations(this._client);
    this.petInsurance = getPetInsuranceOperations(this._client);
    this.petCheckups = getPetCheckupsOperations(this._client);
    this.pets = getPetsOperations(this._client);
  }

  /** The operation groups for ownerInsurance */
  public readonly ownerInsurance: OwnerInsuranceOperations;
  /** The operation groups for ownerCheckups */
  public readonly ownerCheckups: OwnerCheckupsOperations;
  /** The operation groups for owners */
  public readonly owners: OwnersOperations;
  /** The operation groups for checkups */
  public readonly checkups: CheckupsOperations;
  /** The operation groups for toyInsurance */
  public readonly toyInsurance: ToyInsuranceOperations;
  /** The operation groups for toys */
  public readonly toys: ToysOperations;
  /** The operation groups for petInsurance */
  public readonly petInsurance: PetInsuranceOperations;
  /** The operation groups for petCheckups */
  public readonly petCheckups: PetCheckupsOperations;
  /** The operation groups for pets */
  public readonly pets: PetsOperations;
}
