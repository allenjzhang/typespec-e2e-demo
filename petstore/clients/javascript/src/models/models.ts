export type String = string;
export type Int32 = number;
export type Int64 = bigint;
export type Integer = number;
export type Numeric = number;
export interface Pet {
  "id": number;
  "name": string;
  "tag"?: string;
  "age": number;
  "ownerId": bigint;
}
export interface ResourceCreateOrUpdateModel {
  "name"?: string;
  "tag"?: string;
  "age"?: number;
  "ownerId"?: bigint;
}
export interface ResourceCreateModel {
  "name": string;
  "tag"?: string;
  "age": number;
  "ownerId": bigint;
}
export interface CollectionWithNextLink {
  "value": Array<Pet>;
  "nextLink"?: string;
}

export type ResourceLocation = string;
export type Url = string;
export interface ResourceCreateOrUpdateModel_2 {
  "vetName"?: string;
  "notes"?: string;
}
export interface Checkup {
  "id": number;
  "vetName": string;
  "notes": string;
}
export interface CollectionWithNextLink_2 {
  "value": Array<Checkup>;
  "nextLink"?: string;
}

export type ResourceLocation_2 = string;
export interface Insurance {
  "provider": string;
  "premium": number;
  "deductible": number;
}
export interface ResourceCreateOrUpdateModel_3 {
  "provider"?: string;
  "premium"?: number;
  "deductible"?: number;
}
export interface Toy {
  "id": bigint;
  "petId": bigint;
  "name": string;
}
export interface CollectionWithNextLink_3 {
  "value": Array<Toy>;
  "nextLink"?: string;
}

export type ResourceLocation_3 = string;
export interface Owner {
  "id": bigint;
  "name": string;
  "age": number;
}
export interface ResourceCreateOrUpdateModel_4 {
  "name"?: string;
  "age"?: number;
}
export interface ResourceCreateModel_2 {
  "name": string;
  "age": number;
}
export interface CollectionWithNextLink_4 {
  "value": Array<Owner>;
  "nextLink"?: string;
}

export type ResourceLocation_4 = string;