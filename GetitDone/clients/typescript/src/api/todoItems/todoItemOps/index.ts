// Licensed under the MIT License.

import {
  GetitdoneContext as Client,
  TodoItemsTodoItemOpsCloseTodoItemOptionalParams,
  TodoItemsTodoItemOpsDeleteTodoItemOptionalParams,
  TodoItemsTodoItemOpsGetTodoItemOptionalParams,
  TodoItemsTodoItemOpsReopenTodoItemOptionalParams,
  TodoItemsTodoItemOpsUpdateTodoItemOptionalParams,
} from "../../index.js";
import {
  TodoItem,
  todoItemDeserializer,
  UpdateTodoItemRequest,
  updateTodoItemRequestSerializer,
} from "../../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _deleteTodoItemSend(
  context: Client,
  todoitemId: string,
  options: TodoItemsTodoItemOpsDeleteTodoItemOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/todoitems/{todoitem_id}", todoitemId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteTodoItemDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function deleteTodoItem(
  context: Client,
  todoitemId: string,
  options: TodoItemsTodoItemOpsDeleteTodoItemOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _deleteTodoItemSend(context, todoitemId, options);
  return _deleteTodoItemDeserialize(result);
}

export function _reopenTodoItemSend(
  context: Client,
  todoitemId: string,
  options: TodoItemsTodoItemOpsReopenTodoItemOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/todoitems/{todoitem_id}/reopen", todoitemId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _reopenTodoItemDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function reopenTodoItem(
  context: Client,
  todoitemId: string,
  options: TodoItemsTodoItemOpsReopenTodoItemOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _reopenTodoItemSend(context, todoitemId, options);
  return _reopenTodoItemDeserialize(result);
}

export function _closeTodoItemSend(
  context: Client,
  todoitemId: string,
  options: TodoItemsTodoItemOpsCloseTodoItemOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/todoitems/{todoitem_id}/close", todoitemId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _closeTodoItemDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function closeTodoItem(
  context: Client,
  todoitemId: string,
  options: TodoItemsTodoItemOpsCloseTodoItemOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _closeTodoItemSend(context, todoitemId, options);
  return _closeTodoItemDeserialize(result);
}

export function _updateTodoItemSend(
  context: Client,
  todoitemId: string,
  body: UpdateTodoItemRequest,
  options: TodoItemsTodoItemOpsUpdateTodoItemOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/todoitems/{todoitem_id}", todoitemId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: updateTodoItemRequestSerializer(body),
    });
}

export async function _updateTodoItemDeserialize(
  result: PathUncheckedResponse,
): Promise<TodoItem> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return todoItemDeserializer(result.body);
}

export async function updateTodoItem(
  context: Client,
  todoitemId: string,
  body: UpdateTodoItemRequest,
  options: TodoItemsTodoItemOpsUpdateTodoItemOptionalParams = {
    requestOptions: {},
  },
): Promise<TodoItem> {
  const result = await _updateTodoItemSend(context, todoitemId, body, options);
  return _updateTodoItemDeserialize(result);
}

export function _getTodoItemSend(
  context: Client,
  todoitemId: string,
  options: TodoItemsTodoItemOpsGetTodoItemOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/todoitems/{todoitem_id}", todoitemId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getTodoItemDeserialize(
  result: PathUncheckedResponse,
): Promise<TodoItem> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return todoItemDeserializer(result.body);
}

export async function getTodoItem(
  context: Client,
  todoitemId: string,
  options: TodoItemsTodoItemOpsGetTodoItemOptionalParams = {
    requestOptions: {},
  },
): Promise<TodoItem> {
  const result = await _getTodoItemSend(context, todoitemId, options);
  return _getTodoItemDeserialize(result);
}
