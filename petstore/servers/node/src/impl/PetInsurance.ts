import { HttpContext } from "../../tsp-output/@typespec/http-server-js/helpers/router.js";
import {
  Insurance,
  PetInsurance,
  PetStoreError,
} from "../../tsp-output/@typespec/http-server-js/models/all/pet-store.js";
import { InsuranceUpdate } from "../../tsp-output/@typespec/http-server-js/models/all/typespec/rest/resource.js";

export class PetInsuranceImpl implements PetInsurance<HttpContext> {
  get(ctx: HttpContext, petId: number): Promise<Insurance | PetStoreError> {
    throw new Error("Method not implemented.");
  }
  update(
    ctx: HttpContext,
    petId: number,
    properties: InsuranceUpdate
  ): Promise<Insurance | PetStoreError> {
    throw new Error("Method not implemented.");
  }
}
