// Licensed under the MIT License.

import {
  Checkup,
  checkupArrayDeserializer,
  Owner,
  ownerArrayDeserializer,
  Toy,
  toyArrayDeserializer,
  Pet,
  petArrayDeserializer,
} from "../../../models.js";

/** Resource create or update operation model. */
export interface InsuranceUpdate {
  provider?: string;
  premium?: number;
  deductible?: number;
}

export function insuranceUpdateSerializer(item: InsuranceUpdate): any {
  return {
    provider: item["provider"],
    premium: item["premium"],
    deductible: item["deductible"],
  };
}

/** Resource create or update operation model. */
export interface CheckupUpdate {
  vetName?: string;
  notes?: string;
}

export function checkupUpdateSerializer(item: CheckupUpdate): any {
  return { vetName: item["vetName"], notes: item["notes"] };
}

/** Paged response of Checkup items */
export interface CheckupCollectionWithNextLink {
  /** The items on this page */
  value: Checkup[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function checkupCollectionWithNextLinkDeserializer(
  item: any,
): CheckupCollectionWithNextLink {
  return {
    value: checkupArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

/** Resource create or update operation model. */
export interface OwnerUpdate {
  name?: string;
  age?: number;
}

export function ownerUpdateSerializer(item: OwnerUpdate): any {
  return { name: item["name"], age: item["age"] };
}

/** Resource create operation model. */
export interface OwnerCreate {
  name: string;
  age: number;
}

export function ownerCreateSerializer(item: OwnerCreate): any {
  return { name: item["name"], age: item["age"] };
}

/** Paged response of Owner items */
export interface OwnerCollectionWithNextLink {
  /** The items on this page */
  value: Owner[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function ownerCollectionWithNextLinkDeserializer(
  item: any,
): OwnerCollectionWithNextLink {
  return {
    value: ownerArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

/** Paged response of Toy items */
export interface ToyCollectionWithNextLink {
  /** The items on this page */
  value: Toy[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function toyCollectionWithNextLinkDeserializer(
  item: any,
): ToyCollectionWithNextLink {
  return {
    value: toyArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

/** Resource create or update operation model. */
export interface PetUpdate {
  name?: string;
  tag?: string;
  age?: number;
  ownerId?: number;
}

export function petUpdateSerializer(item: PetUpdate): any {
  return {
    name: item["name"],
    tag: item["tag"],
    age: item["age"],
    ownerId: item["ownerId"],
  };
}

/** Resource create operation model. */
export interface PetCreate {
  name: string;
  tag?: string;
  age: number;
  ownerId: number;
}

export function petCreateSerializer(item: PetCreate): any {
  return {
    name: item["name"],
    tag: item["tag"],
    age: item["age"],
    ownerId: item["ownerId"],
  };
}

/** Paged response of Pet items */
export interface PetCollectionWithNextLink {
  /** The items on this page */
  value: Pet[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function petCollectionWithNextLinkDeserializer(
  item: any,
): PetCollectionWithNextLink {
  return {
    value: petArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}
