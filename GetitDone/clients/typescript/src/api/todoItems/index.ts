// Licensed under the MIT License.

import {
  GetitdoneContext as Client,
  TodoItemsCreateTodoItemOptionalParams,
  TodoItemsGetTodoItemsOptionalParams,
} from "../index.js";
import {
  TodoItem,
  todoItemDeserializer,
  CreateTodoItemRequest,
  createTodoItemRequestSerializer,
  todoItemArrayDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _createTodoItemSend(
  context: Client,
  body: CreateTodoItemRequest,
  options: TodoItemsCreateTodoItemOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/todoitems")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: createTodoItemRequestSerializer(body),
    });
}

export async function _createTodoItemDeserialize(
  result: PathUncheckedResponse,
): Promise<TodoItem> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return todoItemDeserializer(result.body);
}

export async function createTodoItem(
  context: Client,
  body: CreateTodoItemRequest,
  options: TodoItemsCreateTodoItemOptionalParams = { requestOptions: {} },
): Promise<TodoItem> {
  const result = await _createTodoItemSend(context, body, options);
  return _createTodoItemDeserialize(result);
}

export function _getTodoItemsSend(
  context: Client,
  options: TodoItemsGetTodoItemsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/todoitems")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getTodoItemsDeserialize(
  result: PathUncheckedResponse,
): Promise<TodoItem[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return todoItemArrayDeserializer(result.body);
}

export async function getTodoItems(
  context: Client,
  options: TodoItemsGetTodoItemsOptionalParams = { requestOptions: {} },
): Promise<TodoItem[]> {
  const result = await _getTodoItemsSend(context, options);
  return _getTodoItemsDeserialize(result);
}
