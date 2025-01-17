using sample;
using System.ClientModel;
using System.ClientModel.Primitives;
using System.Collections.Generic;
using System.Globalization;
using System.Net.Http.Headers;
using System.Net.Mail;
using System.Text.Json;
using Todo;
using Todo.Models;

var client = new TodoClient(new Uri("http://localhost:5244"), new ApiKeyCredential("dummy"));

// create a user
var user = await client.GetUsersClient().CreateAsync(new User("John Doe", "test@example.com", "p@ssw0rd"));
Console.WriteLine($"User {user.Value.Id} created");

// try to get a non-exist todo item
try
{
    var todoItem = await client.GetTodoItemsClient().GetAsync(0);
}
catch (ClientResultException ex)
{
    using var errorResponse = JsonDocument.Parse(ex.GetRawResponse()?.ContentStream!);
    Console.WriteLine($"Cannot find todo item, error code: {errorResponse.RootElement.GetProperty("code").GetString()}");
}

var todoItemsClient = client.GetTodoItemsClient();
// create a todo item
Console.WriteLine("create todoItem");
var item = new TodoItem("Buy milk", TodoItemStatus.InProgress)
{
    AssignedTo = 10,
    Description = "Need to buy milk",
};
var createResponse = await todoItemsClient.CreateJsonAsync(item);
Console.WriteLine($"Todo item {createResponse.Value.Id} created");

// get the todo item
Console.WriteLine("retrieve todoItem");
var getResponse = await todoItemsClient.GetAsync(createResponse.Value.Id);
Console.WriteLine($"Todo item {getResponse.Value.Id} retrieved, title: {getResponse.Value.Title}, status: {getResponse.Value.Status}, assignedTo: {getResponse.Value.AssignedTo}, description: {getResponse.Value.Description}");

Console.Write("update todoItem");
var patch = new
{
    title = "Buy milk and bread",
    status = TodoItemStatus.Completed.ToString(),
    assignedTo = 20,
};
var updateResponse = await todoItemsClient.UpdateAsync(getResponse.Value.Id, BinaryContent.Create(BinaryData.FromObjectAsJson(patch)));
var updatedItem = ModelReaderWriter.Read<TodoItem>(BinaryData.FromStream(updateResponse.GetRawResponse().ContentStream!))!;
Console.WriteLine($"Todo item updated, title: {updatedItem.Title}, status: {updatedItem.Status}, assignedTo: {updatedItem.AssignedTo}, description: {updatedItem.Description}");

// list all available todo items
Console.WriteLine("list todoItems");
var listResponse = await todoItemsClient.ListAsync();
foreach (var i in listResponse.Value.Items)
{
    Console.WriteLine($"Item title: {i.Title}, status: {i.Status}");
}

// create item via multipart/form-data
using var todoItemsContent = new MultiPartFormDataBinaryContent();
var newItem = new TodoItem("Read code", TodoItemStatus.NotStarted);
todoItemsContent.Add(ModelReaderWriter.Write(newItem), "items", contentType: "application/json");
const string codeFilename = "note1.txt";
await using var codeFileStream = File.OpenRead(codeFilename);
todoItemsContent.Add(codeFileStream, "attachments", filename: codeFilename, contentType: "application/octet-stream");
var createTodoItemFormResponse = await todoItemsClient.CreateFormAsync(todoItemsContent, todoItemsContent.ContentType);
var todoItem2 = ModelReaderWriter.Read<TodoItem>(createTodoItemFormResponse.GetRawResponse().Content);
var todoItem2Id = todoItem2!.Id;
Console.WriteLine($"todo item created via multipart/form-data, id: {todoItem2!.Id}");

var attachmentsClient = todoItemsClient.GetTodoItemsAttachmentsClient();
using var attachmentContent = new MultiPartFormDataBinaryContent();
const string code2Filename = "note2.txt";
await using var codeFileStream2 = File.OpenRead(code2Filename);
attachmentContent.Add(codeFileStream2, "contents", filename: code2Filename, contentType: "application/octet-stream");
await attachmentsClient.CreateFileAttachmentAsync(todoItem2!.Id, attachmentContent, attachmentContent.ContentType);
Console.WriteLine("todo item attachment created via multipart/form-data");

// list the attachments
Console.WriteLine("list the attachments");
var listAttachmentsResponse = await attachmentsClient.ListAsync(getResponse.Value.Id);
foreach (var i in listAttachmentsResponse.Value.Items)
{
    Console.WriteLine($"Attachment filename: {i.Filename}, media type: {i.MediaType}, content: {i.Contents}");
}

Console.WriteLine("delete item");
await todoItemsClient.DeleteAsync(getResponse.Value.Id);
Console.WriteLine("Item deleted");
