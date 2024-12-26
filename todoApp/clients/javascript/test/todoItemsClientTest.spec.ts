// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { assert, beforeEach, it, describe } from "vitest";
import { TodoClient } from "../src/todoClient.js";
import { TodoItem } from "../src/models/models.js";

describe("TodoApp Samples", () => {
  let client: TodoClient;
  beforeEach(async function () {
    client = new TodoClient("http://localhost:5244", {
      key: "dummy"
    },{
      allowInsecureConnection: true,
    });
  });

  const item: TodoItem = {
    title: "Buy milk",
    createdBy: 1,
    assignedTo: 10,
    description: "Need to buy milk",
    status: "InProgress",
    createdAt: new Date(),
    updatedAt: new Date(),
    id: 1
  };

  // create a user
  it("create a user", async function () {
    const user = await client.users.create({
      username: "Harry Potter",
      email: "harry@email.com",
      password: "password",
      id: 1,
    });
    assert.equal(user.id, 0);
    assert.equal(user.username, "Harry Potter");
    assert.equal(user.email, "harry@email.com");
    assert.isNotNull(user.token);
  });

  // get a non-exist todo item
  it("get when not exist we should get a 404", async function () {
    try {
      await client.todoItems.get(0);

    } catch (error) {
      const result = JSON.parse(JSON.stringify(error))
      assert.isNotNull(error);
      assert.equal(result.statusCode, 404);
      assert.equal(result.code, "not-found");

    }
  });

  // - create a todo item
  it("create a todo item", async function () {
    const todoItem = await client.todoItems.createJson(item);
    assert.equal(todoItem.id, 0);
    assert.equal(todoItem.title, "Buy milk");
    assert.equal(todoItem.description, "Need to buy milk");
    assert.equal(todoItem.createdBy, 0);
    assert.equal(todoItem.status, "InProgress");
    assert.isNotNull(todoItem.createdAt);
    assert.isNotNull(todoItem.updatedAt);
  });

  // - get the created todo item
  it("get a todo item", async function () {
    const createItem = await client.todoItems.createJson(item);
    const todoItem = await client.todoItems.get(createItem.id);
    assert.equal(todoItem.id, 0);
    assert.equal(todoItem.title, "Buy milk");
    assert.equal(todoItem.description, "Need to buy milk");
    assert.equal(todoItem.createdBy, 0);
    assert.equal(todoItem.status, "InProgress");
    assert.isNotNull(todoItem.createdAt);
    assert.isNotNull(todoItem.updatedAt);

  });

  // update a todo item
  it("update a todo item", async function () {
    const createItem = await client.todoItems.createJson(item);
    const todoItem = await client.todoItems.update(createItem.id, {
      title: "Buy milk and bread",
      assignedTo: 2,
      description: "Need to buy milk and eggs from the store"
    });
    assert.equal(todoItem.id, 0);
    assert.equal(todoItem.title, "Buy milk and bread");
    assert.equal(todoItem.description, "Need to buy milk and eggs from the store");
    assert.equal(todoItem.createdBy, 0);
    assert.equal(todoItem.status, "InProgress");
    assert.isNotNull(todoItem.createdAt);
    assert.isNotNull(todoItem.updatedAt);

  });

  // - list all available todo items
  it("list all available todo items", async function () {
    const iter = client.todoItems.list({ limit: 1, offset: 0 });
    const result: TodoItem[] = [];
    for await (const item of iter.byPage()) {
      result.push(...item);
    }
    assert.equal(result[0].id, 0);
    assert.equal(result[0].title, "Buy milk and bread");
    assert.equal(result[0].description, "Need to buy milk and eggs from the store");
    assert.equal(result[0].createdBy, 0);
    assert.equal(result[0].status, "InProgress");
    assert.isNotNull(result[0].createdAt);
    assert.isNotNull(result[0].updatedAt);

  });

  // - delete the todo item
  it("create one and then delete", async function () {
    const createItem = await client.todoItems.createJson(item);
    const todoItem = await client.todoItems.delete(createItem.id);
    assert.isUndefined(todoItem);

  });

  // delete when it does not exist should get a 404
  it("delete when it does not exist should get a 404", async function () {
    try {
      await client.todoItems.delete(1);
    } catch (error) {
      const result = JSON.parse(JSON.stringify(error))
      assert.isNotNull(error);
      assert.equal(result.statusCode, 404);
      assert.equal(result.code, "not-found");
    }
  });
});
