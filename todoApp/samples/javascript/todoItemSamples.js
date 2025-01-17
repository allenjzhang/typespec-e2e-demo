const { TodoClient } = require("@notabrand/todo-non-branded");
const { readFile } = require("fs/promises");
// Load the .env file if it exists
require("dotenv").config();

const endpoint = process.env["ENDPOINT"] || "http://localhost:5244";

const client = new TodoClient(
  endpoint,
  { key: "dummy" },
  { allowInsecureConnection: true }
);

async function main() {
  // create a user
  const user = await client.users.create({
    username: "Harry Potter",
    email: "harry@email.com",
    password: "password"
  });
  console.log(user);

  // get a non-exist todo item
  try {
    await client.todoItems.get(0);
  } catch (error) {
    console.log(error.code);
  }

  // - create a todo item
  const item = {
    title: "Buy milk",
    assignedTo: 10,
    description: "Need to buy milk",
    status: "InProgress"
  };
  const createdTodoItem = await client.todoItems.createJson(item);
  console.log(createdTodoItem);
  
  // - get the created todo item
  const getTodoItem = await client.todoItems.get(createdTodoItem.id);
  console.log(getTodoItem);

  // update a todo item
  const updatedTodoItem = await client.todoItems.update(createdTodoItem.id, {
    title: "Buy milk and bread",
    assignedTo: 2,
    description: "Need to buy milk and eggs from the store"
  });
  console.log(updatedTodoItem);

  // - list all available todo items
  const iter = client.todoItems.list({ limit: 1, offset: 0 });
  const result = [];
  for await (const item of iter.byPage()) {
    result.push(...item);
  }
  console.log(result);

  // - create a new todo item via multipart/form-data operation
  const createdTodoItem2 = await client.todoItems.createForm({item:item});
  console.log(createdTodoItem2);

  // - upload a local file as the attachment of the created todo item
  const file1 = await readFile("./note1.txt");
  const createdTodoItem3 = await client.todoItems.attachments.createJsonAttachment(1, {
     contents: file1, mediaType: "application/octet-stream", filename: "note1.txt"
  });
  console.log(createdTodoItem3);

  const file2 = await readFile("./note2.txt");
  const createdTodoItem4 = await client.todoItems.attachments.createFileAttachment(1, {contents:{
    contents: file2, contentType: "application/json", filename: "note2.txt"
  }});
  console.log(createdTodoItem4);

  // - list all existing attachments
  const attachments = await client.todoItems.attachments.list(1);
  const result2 = [];
  for await (const attachment of attachments) {
    result2.push(attachment);
  }
  console.log(result2);

  // - delete the todo item
  const deleteTodoItem = await client.todoItems.delete(createdTodoItem.id);
  console.log(deleteTodoItem);

  // delete when it does not exist should get a 404
  try {
    await client.todoItems.delete(0);
  } catch (error) {
    console.log(error.code);
  }
}

main().catch(console.error);
