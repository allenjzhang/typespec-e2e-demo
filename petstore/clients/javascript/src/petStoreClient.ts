import { ResourceCreateOrUpdateModel, ResourceCreateModel, ResourceCreateOrUpdateModel_2, ResourceCreateOrUpdateModel_3, ResourceCreateOrUpdateModel_4, ResourceCreateModel_2 } from "./models/models.js";
import { PetStoreClientContext, PetStoreClientOptions, createPetStoreClientContext } from "./api/petStoreClientContext.js";
import { GetOptions, get, UpdateOptions, update, DeleteOptions, delete_, CreateOptions, create, ListOptions, list } from "./api/petsClient/petsClientOperations.js";
import { PetsClientContext, PetsClientOptions, createPetsClientContext } from "./api/petsClient/petsClientContext.js";
import { CreateOrUpdateOptions, createOrUpdate, ListOptions as ListOptions_2, list as list_2 } from "./api/petCheckupsClient/petCheckupsClientOperations.js";
import { PetCheckupsClientContext, PetCheckupsClientOptions, createPetCheckupsClientContext } from "./api/petCheckupsClient/petCheckupsClientContext.js";
import { GetOptions as GetOptions_2, get as get_2, UpdateOptions as UpdateOptions_2, update as update_2 } from "./api/petInsuranceClient/petInsuranceClientOperations.js";
import { PetInsuranceClientContext, PetInsuranceClientOptions, createPetInsuranceClientContext } from "./api/petInsuranceClient/petInsuranceClientContext.js";
import { GetOptions as GetOptions_3, get as get_3, ListOptions as ListOptions_3, list as list_3 } from "./api/toysClient/toysClientOperations.js";
import { ToysClientContext, ToysClientOptions, createToysClientContext } from "./api/toysClient/toysClientContext.js";
import { GetOptions as GetOptions_4, get as get_4, UpdateOptions as UpdateOptions_3, update as update_3 } from "./api/toyInsuranceClient/toyInsuranceClientOperations.js";
import { ToyInsuranceClientContext, ToyInsuranceClientOptions, createToyInsuranceClientContext } from "./api/toyInsuranceClient/toyInsuranceClientContext.js";
import { CreateOrUpdateOptions as CreateOrUpdateOptions_2, createOrUpdate as createOrUpdate_2, ListOptions as ListOptions_4, list as list_4 } from "./api/checkupsClient/checkupsClientOperations.js";
import { CheckupsClientContext, CheckupsClientOptions, createCheckupsClientContext } from "./api/checkupsClient/checkupsClientContext.js";
import { GetOptions as GetOptions_5, get as get_5, UpdateOptions as UpdateOptions_4, update as update_4, DeleteOptions as DeleteOptions_2, delete_ as delete__2, CreateOptions as CreateOptions_2, create as create_2, ListOptions as ListOptions_5, list as list_5 } from "./api/ownersClient/ownersClientOperations.js";
import { OwnersClientContext, OwnersClientOptions, createOwnersClientContext } from "./api/ownersClient/ownersClientContext.js";
import { CreateOrUpdateOptions as CreateOrUpdateOptions_3, createOrUpdate as createOrUpdate_3, ListOptions as ListOptions_6, list as list_6 } from "./api/ownerCheckupsClient/ownerCheckupsClientOperations.js";
import { OwnerCheckupsClientContext, OwnerCheckupsClientOptions, createOwnerCheckupsClientContext } from "./api/ownerCheckupsClient/ownerCheckupsClientContext.js";
import { GetOptions as GetOptions_6, get as get_6, UpdateOptions as UpdateOptions_5, update as update_5 } from "./api/ownerInsuranceClient/ownerInsuranceClientOperations.js";
import { OwnerInsuranceClientContext, OwnerInsuranceClientOptions, createOwnerInsuranceClientContext } from "./api/ownerInsuranceClient/ownerInsuranceClientContext.js";

export class PetStoreClient {
  #context: PetStoreClientContext;
  petsClient: PetsClient;petCheckupsClient: PetCheckupsClient;petInsuranceClient: PetInsuranceClient;toysClient: ToysClient;toyInsuranceClient: ToyInsuranceClient;checkupsClient: CheckupsClient;ownersClient: OwnersClient;ownerCheckupsClient: OwnerCheckupsClient;ownerInsuranceClient: OwnerInsuranceClient;
  constructor(endpoint: string, options?: PetStoreClientOptions) {
    this.#context = createPetStoreClientContext(endpoint, options);
    this.petsClient = new PetsClient(
      endpoint,
      options
    );;this.petCheckupsClient = new PetCheckupsClient(
      endpoint,
      options
    );;this.petInsuranceClient = new PetInsuranceClient(
      endpoint,
      options
    );;this.toysClient = new ToysClient(
      endpoint,
      options
    );;this.toyInsuranceClient = new ToyInsuranceClient(
      endpoint,
      options
    );;this.checkupsClient = new CheckupsClient(
      endpoint,
      options
    );;this.ownersClient = new OwnersClient(
      endpoint,
      options
    );;this.ownerCheckupsClient = new OwnerCheckupsClient(
      endpoint,
      options
    );;this.ownerInsuranceClient = new OwnerInsuranceClient(endpoint, options);
  };
  ;;

  ;
  ;
}
export class OwnerInsuranceClient {
  #context: OwnerInsuranceClientContext;
  ;
  constructor(endpoint: string, options?: OwnerInsuranceClientOptions) {
    this.#context = createOwnerInsuranceClientContext(endpoint, options);

  };
  ;;

  ;
  async get(ownerId: bigint, options?: GetOptions_6) {
    return get_6(this.#context, ownerId, options);
  };async update(
    ownerId: bigint,
    properties: ResourceCreateOrUpdateModel_3,
    options?: UpdateOptions_5,) {
    return update_5(this.#context, ownerId, properties, options);
  };
}
export class OwnerCheckupsClient {
  #context: OwnerCheckupsClientContext;
  ;
  constructor(endpoint: string, options?: OwnerCheckupsClientOptions) {
    this.#context = createOwnerCheckupsClientContext(endpoint, options);

  };
  ;;

  ;
  async createOrUpdate(
    ownerId: bigint,
    checkupId: number,
    resource: ResourceCreateOrUpdateModel_2,
    options?: CreateOrUpdateOptions_3,) {
    return createOrUpdate_3(
      this.#context,
      ownerId,
      checkupId,
      resource,
      options
    );
  };async list(ownerId: bigint, options?: ListOptions_6) {
    return list_6(this.#context, ownerId, options);
  };
}
export class OwnersClient {
  #context: OwnersClientContext;
  ;
  constructor(endpoint: string, options?: OwnersClientOptions) {
    this.#context = createOwnersClientContext(endpoint, options);

  };
  ;;

  ;
  async get(ownerId: bigint, options?: GetOptions_5) {
    return get_5(this.#context, ownerId, options);
  };async update(
    ownerId: bigint,
    properties: ResourceCreateOrUpdateModel_4,
    options?: UpdateOptions_4,) {
    return update_4(this.#context, ownerId, properties, options);
  };async delete_(ownerId: bigint, options?: DeleteOptions_2) {
    return delete__2(this.#context, ownerId, options);
  };async create(resource: ResourceCreateModel_2, options?: CreateOptions_2) {
    return create_2(this.#context, resource, options);
  };async list(options?: ListOptions_5) {
    return list_5(this.#context, options);
  };
}
export class CheckupsClient {
  #context: CheckupsClientContext;
  ;
  constructor(endpoint: string, options?: CheckupsClientOptions) {
    this.#context = createCheckupsClientContext(endpoint, options);

  };
  ;;

  ;
  async createOrUpdate(
    checkupId: number,
    resource: ResourceCreateOrUpdateModel_2,
    options?: CreateOrUpdateOptions_2,) {
    return createOrUpdate_2(this.#context, checkupId, resource, options);
  };async list(options?: ListOptions_4) {
    return list_4(this.#context, options);
  };
}
export class ToyInsuranceClient {
  #context: ToyInsuranceClientContext;
  ;
  constructor(endpoint: string, options?: ToyInsuranceClientOptions) {
    this.#context = createToyInsuranceClientContext(endpoint, options);

  };
  ;;

  ;
  async get(petId: number, toyId: bigint, options?: GetOptions_4) {
    return get_4(this.#context, petId, toyId, options);
  };async update(
    petId: number,
    toyId: bigint,
    properties: ResourceCreateOrUpdateModel_3,
    options?: UpdateOptions_3,) {
    return update_3(this.#context, petId, toyId, properties, options);
  };
}
export class ToysClient {
  #context: ToysClientContext;
  ;
  constructor(endpoint: string, options?: ToysClientOptions) {
    this.#context = createToysClientContext(endpoint, options);

  };
  ;;

  ;
  async get(petId: number, toyId: bigint, options?: GetOptions_3) {
    return get_3(this.#context, petId, toyId, options);
  };async list(petId: number, nameFilter: string, options?: ListOptions_3) {
    return list_3(this.#context, petId, nameFilter, options);
  };
}
export class PetInsuranceClient {
  #context: PetInsuranceClientContext;
  ;
  constructor(endpoint: string, options?: PetInsuranceClientOptions) {
    this.#context = createPetInsuranceClientContext(endpoint, options);

  };
  ;;

  ;
  async get(petId: number, options?: GetOptions_2) {
    return get_2(this.#context, petId, options);
  };async update(
    petId: number,
    properties: ResourceCreateOrUpdateModel_3,
    options?: UpdateOptions_2,) {
    return update_2(this.#context, petId, properties, options);
  };
}
export class PetCheckupsClient {
  #context: PetCheckupsClientContext;
  ;
  constructor(endpoint: string, options?: PetCheckupsClientOptions) {
    this.#context = createPetCheckupsClientContext(endpoint, options);

  };
  ;;

  ;
  async createOrUpdate(
    petId: number,
    checkupId: number,
    resource: ResourceCreateOrUpdateModel_2,
    options?: CreateOrUpdateOptions,) {
    return createOrUpdate(this.#context, petId, checkupId, resource, options);
  };async list(petId: number, options?: ListOptions_2) {
    return list_2(this.#context, petId, options);
  };
}
export class PetsClient {
  #context: PetsClientContext;
  ;
  constructor(endpoint: string, options?: PetsClientOptions) {
    this.#context = createPetsClientContext(endpoint, options);

  };
  ;;

  ;
  async get(petId: number, options?: GetOptions) {
    return get(this.#context, petId, options);
  };async update(
    petId: number,
    properties: ResourceCreateOrUpdateModel,
    options?: UpdateOptions,) {
    return update(this.#context, petId, properties, options);
  };async delete_(petId: number, options?: DeleteOptions) {
    return delete_(this.#context, petId, options);
  };async create(resource: ResourceCreateModel, options?: CreateOptions) {
    return create(this.#context, resource, options);
  };async list(options?: ListOptions) {
    return list(this.#context, options);
  };
}