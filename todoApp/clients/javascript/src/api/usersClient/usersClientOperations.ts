import { User } from "../../models/models.js";
import { parse } from "uri-template";
import { jsonUserToTransportTransform } from "../../models/internal/serializers.js";
import { UsersClientContext } from "./usersClientContext.js";
import { OperationOptions } from "../../helpers/interfaces.js";
import { createRestError } from "../../helpers/error.js";

export interface CreateOptions extends OperationOptions {

}export async function create(
  client: UsersClientContext,
  user: User,
  options?: CreateOptions,): Promise<{"id": number;
"username": string;
"email": string;
"token": string;}> {
  const path = parse("/users").expand({

  });
  const httpRequestOptions = {
    headers: {

    },body: jsonUserToTransportTransform(user),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions)

  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  ;if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return {
      "id": response.body.id,"username": response.body.username,"email": response.body.email,"token": response.body.token
    }!;
  }throw createRestError(response);
};