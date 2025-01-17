// Licensed under the MIT License.

/** model interface Insurance */
export interface Insurance {
  provider: string;
  premium: number;
  deductible: number;
}

export function insuranceDeserializer(item: any): Insurance {
  return {
    provider: item["provider"],
    premium: item["premium"],
    deductible: item["deductible"],
  };
}

/** model interface PetStoreError */
export interface PetStoreError {
  code: number;
  message: string;
}

export function petStoreErrorDeserializer(item: any): PetStoreError {
  return {
    code: item["code"],
    message: item["message"],
  };
}

/** model interface Checkup */
export interface Checkup {
  id: number;
  vetName: string;
  notes: string;
}

export function checkupDeserializer(item: any): Checkup {
  return {
    id: item["id"],
    vetName: item["vetName"],
    notes: item["notes"],
  };
}

export function checkupArrayDeserializer(result: Array<Checkup>): any[] {
  return result.map((item) => {
    return checkupDeserializer(item);
  });
}

/** model interface Owner */
export interface Owner {
  id: number;
  name: string;
  age: number;
}

export function ownerDeserializer(item: any): Owner {
  return {
    id: item["id"],
    name: item["name"],
    age: item["age"],
  };
}

export function ownerArrayDeserializer(result: Array<Owner>): any[] {
  return result.map((item) => {
    return ownerDeserializer(item);
  });
}

/** model interface Toy */
export interface Toy {
  id: number;
  petId: number;
  name: string;
}

export function toyDeserializer(item: any): Toy {
  return {
    id: item["id"],
    petId: item["petId"],
    name: item["name"],
  };
}

export function toyArrayDeserializer(result: Array<Toy>): any[] {
  return result.map((item) => {
    return toyDeserializer(item);
  });
}

/** model interface Pet */
export interface Pet {
  id: number;
  name: string;
  tag?: string;
  age: number;
  ownerId: number;
}

export function petDeserializer(item: any): Pet {
  return {
    id: item["id"],
    name: item["name"],
    tag: item["tag"],
    age: item["age"],
    ownerId: item["ownerId"],
  };
}

export function petArrayDeserializer(result: Array<Pet>): any[] {
  return result.map((item) => {
    return petDeserializer(item);
  });
}
