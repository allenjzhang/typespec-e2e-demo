// Licensed under the MIT License.

import { GetitdoneContext } from "../../../api/getitdoneContext.js";
import {
  TodoItemsTodoItemOpsDeleteTodoItemOptionalParams,
  TodoItemsTodoItemOpsReopenTodoItemOptionalParams,
  TodoItemsTodoItemOpsCloseTodoItemOptionalParams,
  TodoItemsTodoItemOpsUpdateTodoItemOptionalParams,
  TodoItemsTodoItemOpsGetTodoItemOptionalParams,
} from "../../../api/options.js";
import {
  deleteTodoItem,
  reopenTodoItem,
  closeTodoItem,
  updateTodoItem,
  getTodoItem,
} from "../../../api/todoItems/todoItemOps/index.js";
import { TodoItem, UpdateTodoItemRequest } from "../../../models/models.js";

/** Interface representing a TodoItemsTodoItemOps operations. */
export interface TodoItemsTodoItemOpsOperations {
  deleteTodoItem: (
    todoitemId: string,
    options?: TodoItemsTodoItemOpsDeleteTodoItemOptionalParams,
  ) => Promise<void>;
  reopenTodoItem: (
    todoitemId: string,
    options?: TodoItemsTodoItemOpsReopenTodoItemOptionalParams,
  ) => Promise<void>;
  closeTodoItem: (
    todoitemId: string,
    options?: TodoItemsTodoItemOpsCloseTodoItemOptionalParams,
  ) => Promise<void>;
  updateTodoItem: (
    todoitemId: string,
    body: UpdateTodoItemRequest,
    options?: TodoItemsTodoItemOpsUpdateTodoItemOptionalParams,
  ) => Promise<TodoItem>;
  getTodoItem: (
    todoitemId: string,
    options?: TodoItemsTodoItemOpsGetTodoItemOptionalParams,
  ) => Promise<TodoItem>;
}

export function getTodoItemsTodoItemOps(context: GetitdoneContext) {
  return {
    deleteTodoItem: (
      todoitemId: string,
      options?: TodoItemsTodoItemOpsDeleteTodoItemOptionalParams,
    ) => deleteTodoItem(context, todoitemId, options),
    reopenTodoItem: (
      todoitemId: string,
      options?: TodoItemsTodoItemOpsReopenTodoItemOptionalParams,
    ) => reopenTodoItem(context, todoitemId, options),
    closeTodoItem: (
      todoitemId: string,
      options?: TodoItemsTodoItemOpsCloseTodoItemOptionalParams,
    ) => closeTodoItem(context, todoitemId, options),
    updateTodoItem: (
      todoitemId: string,
      body: UpdateTodoItemRequest,
      options?: TodoItemsTodoItemOpsUpdateTodoItemOptionalParams,
    ) => updateTodoItem(context, todoitemId, body, options),
    getTodoItem: (
      todoitemId: string,
      options?: TodoItemsTodoItemOpsGetTodoItemOptionalParams,
    ) => getTodoItem(context, todoitemId, options),
  };
}

export function getTodoItemsTodoItemOpsOperations(
  context: GetitdoneContext,
): TodoItemsTodoItemOpsOperations {
  return {
    ...getTodoItemsTodoItemOps(context),
  };
}
