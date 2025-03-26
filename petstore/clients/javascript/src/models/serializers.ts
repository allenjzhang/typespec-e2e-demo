import { ResourceCreateOrUpdateModel_3, ResourceCreateOrUpdateModel_2, ResourceCreateOrUpdateModel_4, ResourceCreateModel_2, ResourceCreateOrUpdateModel, ResourceCreateModel, Pet, CollectionWithNextLink, Checkup, CollectionWithNextLink_2, Insurance, Toy, CollectionWithNextLink_3, Owner, CollectionWithNextLink_4 } from "./models.js";

export function decodeBase64(value: string): Uint8Array | undefined {
  if(!value) {
    return value as any;
  }
  // Normalize Base64URL to Base64
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/')
    .padEnd(value.length + (4 - (value.length % 4)) % 4, '=');

  return new Uint8Array(Buffer.from(base64, 'base64'));
}export function encodeUint8Array(
  value: Uint8Array | undefined | null,
  encoding: BufferEncoding,): string | undefined {
  if (!value) {
    return value as any;
  }
  return Buffer.from(value).toString(encoding);
}export function dateDeserializer(date?: string | null): Date {
  if (!date) {
    return date as any;
  }

  return new Date(date);
}export function dateRfc7231Deserializer(date?: string | null): Date {
  if (!date) {
    return date as any;
  }

  return new Date(date);
}export function dateRfc3339Serializer(date?: Date | null): string {
  if (!date) {
    return date as any
  }

  return date.toISOString();
}export function dateRfc7231Serializer(date?: Date | null): string {
  if (!date) {
    return date as any;
  }

  return date.toUTCString();
}export function dateUnixTimestampSerializer(date?: Date | null): number {
  if (!date) {
    return date as any;
  }

  return Math.floor(date.getTime() / 1000);
}export function dateUnixTimestampDeserializer(date?: number | null): Date {
  if (!date) {
    return date as any;
  }

  return new Date(date * 1000);
}export function updatePayloadToTransport(
  payload: ResourceCreateOrUpdateModel_3,) {
  return jsonResourceCreateOrUpdateModelToTransportTransform_3(payload)!;
}export function createOrUpdatePayloadToTransport(
  payload: ResourceCreateOrUpdateModel_2,) {
  return jsonResourceCreateOrUpdateModelToTransportTransform_2(payload)!;
}export function updatePayloadToTransport_2(
  payload: ResourceCreateOrUpdateModel_4,) {
  return jsonResourceCreateOrUpdateModelToTransportTransform_4(payload)!;
}export function createPayloadToTransport(payload: ResourceCreateModel_2) {
  return jsonResourceCreateModelToTransportTransform_2(payload)!;
}export function createOrUpdatePayloadToTransport_2(
  payload: ResourceCreateOrUpdateModel_2,) {
  return jsonResourceCreateOrUpdateModelToTransportTransform_2(payload)!;
}export function updatePayloadToTransport_3(
  payload: ResourceCreateOrUpdateModel_3,) {
  return jsonResourceCreateOrUpdateModelToTransportTransform_3(payload)!;
}export function updatePayloadToTransport_4(
  payload: ResourceCreateOrUpdateModel_3,) {
  return jsonResourceCreateOrUpdateModelToTransportTransform_3(payload)!;
}export function createOrUpdatePayloadToTransport_3(
  payload: ResourceCreateOrUpdateModel_2,) {
  return jsonResourceCreateOrUpdateModelToTransportTransform_2(payload)!;
}export function updatePayloadToTransport_5(
  payload: ResourceCreateOrUpdateModel,) {
  return jsonResourceCreateOrUpdateModelToTransportTransform(payload)!;
}export function createPayloadToTransport_2(payload: ResourceCreateModel) {
  return jsonResourceCreateModelToTransportTransform(payload)!;
}export function jsonPetToTransportTransform(input_?: Pet | null): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    "id": input_.id,"name": input_.name,"tag": input_.tag,"age": input_.age,"ownerId": input_.ownerId
  }!;
}export function jsonPetToApplicationTransform(input_?: any): Pet {
  if(!input_) {
    return input_ as any;
  }
    return {
    "id": input_.id,"name": input_.name,"tag": input_.tag,"age": input_.age,"ownerId": input_.ownerId
  }!;
}export function jsonResourceCreateOrUpdateModelToTransportTransform(
  input_?: ResourceCreateOrUpdateModel | null,): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    "name": input_.name,"tag": input_.tag,"age": input_.age,"ownerId": input_.ownerId
  }!;
}export function jsonResourceCreateOrUpdateModelToApplicationTransform(
  input_?: any,): ResourceCreateOrUpdateModel {
  if(!input_) {
    return input_ as any;
  }
    return {
    "name": input_.name,"tag": input_.tag,"age": input_.age,"ownerId": input_.ownerId
  }!;
}export function jsonResourceCreateModelToTransportTransform(
  input_?: ResourceCreateModel | null,): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    "name": input_.name,"tag": input_.tag,"age": input_.age,"ownerId": input_.ownerId
  }!;
}export function jsonResourceCreateModelToApplicationTransform(
  input_?: any,): ResourceCreateModel {
  if(!input_) {
    return input_ as any;
  }
    return {
    "name": input_.name,"tag": input_.tag,"age": input_.age,"ownerId": input_.ownerId
  }!;
}export function jsonCollectionWithNextLinkToTransportTransform(
  input_?: CollectionWithNextLink | null,): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    "value": jsonArrayPetToTransportTransform(input_.value),"nextLink": input_.nextLink
  }!;
}export function jsonCollectionWithNextLinkToApplicationTransform(
  input_?: any,): CollectionWithNextLink {
  if(!input_) {
    return input_ as any;
  }
    return {
    "value": jsonArrayPetToApplicationTransform(input_.value),"nextLink": input_.nextLink
  }!;
}export function jsonArrayPetToTransportTransform(
  items_?: Array<Pet> | null,): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPetToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayPetToApplicationTransform(items_?: any): Array<Pet> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonPetToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonResourceCreateOrUpdateModelToTransportTransform_2(
  input_?: ResourceCreateOrUpdateModel_2 | null,): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    "vetName": input_.vetName,"notes": input_.notes
  }!;
}export function jsonResourceCreateOrUpdateModelToApplicationTransform_2(
  input_?: any,): ResourceCreateOrUpdateModel_2 {
  if(!input_) {
    return input_ as any;
  }
    return {
    "vetName": input_.vetName,"notes": input_.notes
  }!;
}export function jsonCheckupToTransportTransform(input_?: Checkup | null): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    "id": input_.id,"vetName": input_.vetName,"notes": input_.notes
  }!;
}export function jsonCheckupToApplicationTransform(input_?: any): Checkup {
  if(!input_) {
    return input_ as any;
  }
    return {
    "id": input_.id,"vetName": input_.vetName,"notes": input_.notes
  }!;
}export function jsonCollectionWithNextLinkToTransportTransform_2(
  input_?: CollectionWithNextLink_2 | null,): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    "value": jsonArrayCheckupToTransportTransform(input_.value),"nextLink": input_.nextLink
  }!;
}export function jsonCollectionWithNextLinkToApplicationTransform_2(
  input_?: any,): CollectionWithNextLink_2 {
  if(!input_) {
    return input_ as any;
  }
    return {
    "value": jsonArrayCheckupToApplicationTransform(input_.value),"nextLink": input_.nextLink
  }!;
}export function jsonArrayCheckupToTransportTransform(
  items_?: Array<Checkup> | null,): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonCheckupToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayCheckupToApplicationTransform(
  items_?: any,): Array<Checkup> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonCheckupToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonInsuranceToTransportTransform(
  input_?: Insurance | null,): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    "provider": input_.provider,"premium": input_.premium,"deductible": input_.deductible
  }!;
}export function jsonInsuranceToApplicationTransform(input_?: any): Insurance {
  if(!input_) {
    return input_ as any;
  }
    return {
    "provider": input_.provider,"premium": input_.premium,"deductible": input_.deductible
  }!;
}export function jsonResourceCreateOrUpdateModelToTransportTransform_3(
  input_?: ResourceCreateOrUpdateModel_3 | null,): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    "provider": input_.provider,"premium": input_.premium,"deductible": input_.deductible
  }!;
}export function jsonResourceCreateOrUpdateModelToApplicationTransform_3(
  input_?: any,): ResourceCreateOrUpdateModel_3 {
  if(!input_) {
    return input_ as any;
  }
    return {
    "provider": input_.provider,"premium": input_.premium,"deductible": input_.deductible
  }!;
}export function jsonToyToTransportTransform(input_?: Toy | null): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    "id": input_.id,"petId": input_.petId,"name": input_.name
  }!;
}export function jsonToyToApplicationTransform(input_?: any): Toy {
  if(!input_) {
    return input_ as any;
  }
    return {
    "id": input_.id,"petId": input_.petId,"name": input_.name
  }!;
}export function jsonCollectionWithNextLinkToTransportTransform_3(
  input_?: CollectionWithNextLink_3 | null,): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    "value": jsonArrayToyToTransportTransform(input_.value),"nextLink": input_.nextLink
  }!;
}export function jsonCollectionWithNextLinkToApplicationTransform_3(
  input_?: any,): CollectionWithNextLink_3 {
  if(!input_) {
    return input_ as any;
  }
    return {
    "value": jsonArrayToyToApplicationTransform(input_.value),"nextLink": input_.nextLink
  }!;
}export function jsonArrayToyToTransportTransform(
  items_?: Array<Toy> | null,): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonToyToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayToyToApplicationTransform(items_?: any): Array<Toy> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonToyToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonOwnerToTransportTransform(input_?: Owner | null): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    "id": input_.id,"name": input_.name,"age": input_.age
  }!;
}export function jsonOwnerToApplicationTransform(input_?: any): Owner {
  if(!input_) {
    return input_ as any;
  }
    return {
    "id": input_.id,"name": input_.name,"age": input_.age
  }!;
}export function jsonResourceCreateOrUpdateModelToTransportTransform_4(
  input_?: ResourceCreateOrUpdateModel_4 | null,): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    "name": input_.name,"age": input_.age
  }!;
}export function jsonResourceCreateOrUpdateModelToApplicationTransform_4(
  input_?: any,): ResourceCreateOrUpdateModel_4 {
  if(!input_) {
    return input_ as any;
  }
    return {
    "name": input_.name,"age": input_.age
  }!;
}export function jsonResourceCreateModelToTransportTransform_2(
  input_?: ResourceCreateModel_2 | null,): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    "name": input_.name,"age": input_.age
  }!;
}export function jsonResourceCreateModelToApplicationTransform_2(
  input_?: any,): ResourceCreateModel_2 {
  if(!input_) {
    return input_ as any;
  }
    return {
    "name": input_.name,"age": input_.age
  }!;
}export function jsonCollectionWithNextLinkToTransportTransform_4(
  input_?: CollectionWithNextLink_4 | null,): any {
  if(!input_) {
    return input_ as any;
  }
    return {
    "value": jsonArrayOwnerToTransportTransform(input_.value),"nextLink": input_.nextLink
  }!;
}export function jsonCollectionWithNextLinkToApplicationTransform_4(
  input_?: any,): CollectionWithNextLink_4 {
  if(!input_) {
    return input_ as any;
  }
    return {
    "value": jsonArrayOwnerToApplicationTransform(input_.value),"nextLink": input_.nextLink
  }!;
}export function jsonArrayOwnerToTransportTransform(
  items_?: Array<Owner> | null,): any {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonOwnerToTransportTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}export function jsonArrayOwnerToApplicationTransform(
  items_?: any,): Array<Owner> {
  if(!items_) {
    return items_ as any;
  }
  const _transformedArray = [];

  for (const item of items_ ?? []) {
    const transformedItem = jsonOwnerToApplicationTransform(item as any);
    _transformedArray.push(transformedItem);
  }

  return _transformedArray as any;
}