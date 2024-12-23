// Generated by Microsoft TypeSpec

import {
  PetUpdate,
  ResourceDeletedResponse,
  PetResourceCreatedResponse,
  PetCreate,
  PetCollectionWithNextLink,
  CheckupResourceCreatedResponse,
  CheckupUpdate,
  CheckupCollectionWithNextLink,
  InsuranceUpdate,
  ToyCollectionWithNextLink,
  OwnerUpdate,
  OwnerResourceCreatedResponse,
  OwnerCreate,
  OwnerCollectionWithNextLink,
} from "./typespec/rest/resource.js";

export interface Pets<Context = unknown> {
  /**
   * Gets an instance of the resource.
   */
  get(ctx: Context, petId: number): Promise<Pet | PetStoreError>;

  /**
   * Updates an existing instance of the resource.
   */
  update(
    ctx: Context,
    petId: number,
    properties: PetUpdate,
  ): Promise<Pet | PetStoreError>;

  /**
   * Deletes an existing instance of the resource.
   */
  delete(
    ctx: Context,
    petId: number,
  ): Promise<ResourceDeletedResponse | PetStoreError>;

  /**
   * Creates a new instance of the resource.
   */
  create(
    ctx: Context,
    resource: PetCreate,
  ): Promise<Pet | PetResourceCreatedResponse | PetStoreError>;

  /**
   * Lists all instances of the resource.
   */
  list(ctx: Context): Promise<PetCollectionWithNextLink | PetStoreError>;
}

export interface PetCheckups<Context = unknown> {
  /**
   * Creates or update an instance of the extension resource.
   */
  createOrUpdate(
    ctx: Context,
    petId: number,
    checkupId: number,
    resource: CheckupUpdate,
  ): Promise<Checkup | CheckupResourceCreatedResponse | PetStoreError>;

  /**
   * Lists all instances of the extension resource.
   */
  list(
    ctx: Context,
    petId: number,
  ): Promise<CheckupCollectionWithNextLink | PetStoreError>;
}

export interface PetInsurance<Context = unknown> {
  /**
   * Gets the singleton resource.
   */
  get(ctx: Context, petId: number): Promise<Insurance | PetStoreError>;

  /**
   * Updates the singleton resource.
   */
  update(
    ctx: Context,
    petId: number,
    properties: InsuranceUpdate,
  ): Promise<Insurance | PetStoreError>;
}

export interface Toys<Context = unknown> {
  /**
   * Gets an instance of the resource.
   */
  get(ctx: Context, petId: number, toyId: bigint): Promise<Toy | PetStoreError>;

  list(
    ctx: Context,
    petId: number,
    nameFilter: string,
  ): Promise<ToyCollectionWithNextLink | PetStoreError>;
}

export interface ToyInsurance<Context = unknown> {
  /**
   * Gets the singleton resource.
   */
  get(
    ctx: Context,
    petId: number,
    toyId: bigint,
  ): Promise<Insurance | PetStoreError>;

  /**
   * Updates the singleton resource.
   */
  update(
    ctx: Context,
    petId: number,
    toyId: bigint,
    properties: InsuranceUpdate,
  ): Promise<Insurance | PetStoreError>;
}

export interface Checkups<Context = unknown> {
  /**
   * Creates or update an instance of the resource.
   */
  createOrUpdate(
    ctx: Context,
    checkupId: number,
    resource: CheckupUpdate,
  ): Promise<Checkup | CheckupResourceCreatedResponse | PetStoreError>;

  /**
   * Lists all instances of the resource.
   */
  list(ctx: Context): Promise<CheckupCollectionWithNextLink | PetStoreError>;
}

export interface Owners<Context = unknown> {
  /**
   * Gets an instance of the resource.
   */
  get(ctx: Context, ownerId: bigint): Promise<Owner | PetStoreError>;

  /**
   * Updates an existing instance of the resource.
   */
  update(
    ctx: Context,
    ownerId: bigint,
    properties: OwnerUpdate,
  ): Promise<Owner | PetStoreError>;

  /**
   * Deletes an existing instance of the resource.
   */
  delete(
    ctx: Context,
    ownerId: bigint,
  ): Promise<ResourceDeletedResponse | PetStoreError>;

  /**
   * Creates a new instance of the resource.
   */
  create(
    ctx: Context,
    resource: OwnerCreate,
  ): Promise<Owner | OwnerResourceCreatedResponse | PetStoreError>;

  /**
   * Lists all instances of the resource.
   */
  list(ctx: Context): Promise<OwnerCollectionWithNextLink | PetStoreError>;
}

export interface OwnerCheckups<Context = unknown> {
  /**
   * Creates or update an instance of the extension resource.
   */
  createOrUpdate(
    ctx: Context,
    ownerId: bigint,
    checkupId: number,
    resource: CheckupUpdate,
  ): Promise<Checkup | CheckupResourceCreatedResponse | PetStoreError>;

  /**
   * Lists all instances of the extension resource.
   */
  list(
    ctx: Context,
    ownerId: bigint,
  ): Promise<CheckupCollectionWithNextLink | PetStoreError>;
}

export interface OwnerInsurance<Context = unknown> {
  /**
   * Gets the singleton resource.
   */
  get(ctx: Context, ownerId: bigint): Promise<Insurance | PetStoreError>;

  /**
   * Updates the singleton resource.
   */
  update(
    ctx: Context,
    ownerId: bigint,
    properties: InsuranceUpdate,
  ): Promise<Insurance | PetStoreError>;
}

export interface PetStoreError {
  code: number;

  message: string;
}

export interface Pet {
  id: number;

  name: string;

  tag?: string;

  age: number;

  ownerId: bigint;
}

export interface Toy {
  id: bigint;

  petId: bigint;

  name: string;
}

export interface Owner {
  id: bigint;

  name: string;

  age: number;
}

export interface Checkup {
  id: number;

  vetName: string;

  notes: string;
}

export interface Insurance {
  provider: string;

  premium: number;

  deductible: number;
}
