// Generated by @typespec/http-server-csharp
// <auto-generated />
#nullable enable

      using System;using System.Text.Json;using System.Text.Json.Serialization;using TypeSpec.Helpers.JsonConverters;using System.Net;using System.Threading.Tasks;using Microsoft.AspNetCore.Mvc;using Microsoft.AspNetCore.WebUtilities;using Todo.Service.Models;

      namespace Todo.Service {

      public interface IAttachmentsOperations {
      Task<PageTodoAttachment> ListAsync( long itemId);
Task CreateJsonAttachmentAsync( long itemId, TodoAttachment body);
Task CreateFileAttachmentAsync( long itemId, MultipartReader reader);

    }
   } 
