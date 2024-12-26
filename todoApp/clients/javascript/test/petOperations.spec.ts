// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { assert, beforeEach, it, describe } from "vitest";
import { TodoClient } from "../src/todoClient.js";
import { TodoItem } from "../src/models/models.js";

describe.only("TodoApp Samples", () => {
  let client: TodoClient;
  beforeEach(async function () {
    client = new TodoClient("http://localhost:5244", {
      key: "dummy"
    },{
      allowInsecureConnection: true,
    });
  });

  // create a user
  it("create a user", async function () {
    const user = await client.users.create({
      username: "Harry Potter",
      email: "harry@email.com",
      password: "password",
      id: 1,
    });
    console.log("create a user",user);
    // assert.equal(user.id, 0);
  });
// - get a non-exist todo item
// - create a todo item
it("create a todo", async function () {
  const todo1 = await client.todoItems.createJson({
    title: "Harry Potter",
    createdBy: 1,
    status: "NotStarted",
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  const todo2 = await client.todoItems.createJson({
    title: "Harry Potter",
    createdBy: 1,
    status: "NotStarted",
    id: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  console.log(todo1, todo2);
  const iter = client.todoItems.list({ limit: 1, offset: 0 });
  const result: TodoItem[] = [];
  for await (const item of iter.byPage()) {
    console.log("items", item);
    result.push(...item);
  }
  console.log(result);
});
// - get the created todo item
// - list all available todo items
// - delete the todo item


});
