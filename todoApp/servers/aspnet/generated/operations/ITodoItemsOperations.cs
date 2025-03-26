// Generated by @typespec/http-server-csharp
// <auto-generated />
#nullable enable

      using System;using System.Text.Json;using System.Text.Json.Serialization;using TypeSpec.Helpers.JsonConverters;using System.Net;using System.Threading.Tasks;using Microsoft.AspNetCore.Mvc;using Microsoft.AspNetCore.WebUtilities;using Todo.Service.Models;

      namespace Todo.Service {

      public interface ITodoItemsOperations {
      Task<TodoPage> ListAsync( int? limit, int? offset);
Task<TodoItem> CreateJsonAsync( TodoItem item, TodoAttachment[]? attachments);
Task<TodoItem> CreateFormAsync( MultipartReader reader);
Task<TodoItem> GetAsync( long id);
Task<TodoItem> UpdateAsync( long id, TodoItemPatch body);
Task DeleteAsync( long id);

    }
   } 
