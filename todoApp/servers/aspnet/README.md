# TodoApp ASP.NET WebAPI project

The current folder contains ASP.NET core basic project with basic service stub code for out of box run-ability.

## Testing the server code

[Follow these steps](../../../how-to-test-server-api.md)

## How the server implements the API

The spec contains three parts:
- `Users`
- `TodoItems`
- `TodoItems.Attachments`

All operations are implemented with internal memory storage. For create operations, the server will echo your request back and update the internal storage. For get and list operations, the server will query the internal storage and give back the results.
