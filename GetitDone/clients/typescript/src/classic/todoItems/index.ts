// Licensed under the MIT License.

import { GetitdoneContext } from "../../api/getitdoneContext.js";
import {
  TodoItemsCreateTodoItemOptionalParams,
  TodoItemsGetTodoItemsOptionalParams,
} from "../../api/options.js";
import { createTodoItem, getTodoItems } from "../../api/todoItems/index.js";
import { TodoItem, CreateTodoItemRequest } from "../../models/models.js";
import {
  TodoItemsTodoItemOpsOperations,
  getTodoItemsTodoItemOpsOperations,
} from "./todoItemOps/index.js";

/** Interface representing a TodoItems operations. */
export interface TodoItemsOperations {
  createTodoItem: (
    body: CreateTodoItemRequest,
    options?: TodoItemsCreateTodoItemOptionalParams,
  ) => Promise<TodoItem>;
  getTodoItems: (
    options?: TodoItemsGetTodoItemsOptionalParams,
  ) => Promise<TodoItem[]>;
  todoItemOps: TodoItemsTodoItemOpsOperations;
}

function _getTodoItems(context: GetitdoneContext) {
  return {
    createTodoItem: (
      body: CreateTodoItemRequest,
      options?: TodoItemsCreateTodoItemOptionalParams,
    ) => createTodoItem(context, body, options),
    getTodoItems: (options?: TodoItemsGetTodoItemsOptionalParams) =>
      getTodoItems(context, options),
  };
}

export function getTodoItemsOperations(
  context: GetitdoneContext,
): TodoItemsOperations {
  return {
    ..._getTodoItems(context),
    todoItemOps: getTodoItemsTodoItemOpsOperations(context),
  };
}
