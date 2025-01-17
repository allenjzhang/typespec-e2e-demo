// Licensed under the MIT License.

export { PetStoreClient } from "./petStoreClient.js";
export {
  Insurance,
  PetStoreError,
  Checkup,
  Owner,
  Toy,
  Pet,
} from "./models/index.js";
export {
  InsuranceUpdate,
  CheckupUpdate,
  CheckupCollectionWithNextLink,
  OwnerUpdate,
  OwnerCreate,
  OwnerCollectionWithNextLink,
  ToyCollectionWithNextLink,
  PetUpdate,
  PetCreate,
  PetCollectionWithNextLink,
} from "./models/typeSpec/rest/resource/index.js";
export {
  OwnerInsuranceUpdateOptionalParams,
  OwnerInsuranceGetOptionalParams,
  OwnerCheckupsListOptionalParams,
  OwnerCheckupsCreateOrUpdateOptionalParams,
  OwnersListOptionalParams,
  OwnersCreateOptionalParams,
  OwnersDeleteOptionalParams,
  OwnersUpdateOptionalParams,
  OwnersGetOptionalParams,
  CheckupsListOptionalParams,
  CheckupsCreateOrUpdateOptionalParams,
  ToyInsuranceUpdateOptionalParams,
  ToyInsuranceGetOptionalParams,
  ToysListOptionalParams,
  ToysGetOptionalParams,
  PetInsuranceUpdateOptionalParams,
  PetInsuranceGetOptionalParams,
  PetCheckupsListOptionalParams,
  PetCheckupsCreateOrUpdateOptionalParams,
  PetsListOptionalParams,
  PetsCreateOptionalParams,
  PetsDeleteOptionalParams,
  PetsUpdateOptionalParams,
  PetsGetOptionalParams,
  PetStoreClientOptionalParams,
} from "./api/index.js";
export {
  CheckupsOperations,
  OwnerCheckupsOperations,
  OwnerInsuranceOperations,
  OwnersOperations,
  PetCheckupsOperations,
  PetInsuranceOperations,
  PetsOperations,
  ToyInsuranceOperations,
  ToysOperations,
} from "./classic/index.js";
