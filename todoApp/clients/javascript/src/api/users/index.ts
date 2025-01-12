// Licensed under the MIT License.

import { TodoContext as Client, UsersCreateOptionalParams } from "../index.js";
import {
  User,
  userSerializer,
  _createResponseDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _createSend(
  context: Client,
  user: User,
  options: UsersCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/users")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: userSerializer(user),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<{
  id: number;
  username: string;
  email: string;
  token: string;
}> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _createResponseDeserializer(result.body);
}

export async function create(
  context: Client,
  user: User,
  options: UsersCreateOptionalParams = { requestOptions: {} },
): Promise<{
  id: number;
  username: string;
  email: string;
  token: string;
}> {
  const result = await _createSend(context, user, options);
  return _createDeserialize(result);
}
