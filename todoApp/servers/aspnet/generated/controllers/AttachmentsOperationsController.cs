// Generated by @typespec/http-server-csharp
// <auto-generated />
#nullable enable

using System;using System.Net;using System.Threading.Tasks;using System.Text.Json;using System.Text.Json.Serialization;using Microsoft.AspNetCore.Mvc;using Todo.Service.Models;using Todo.Service;using Microsoft.AspNetCore.WebUtilities;using Microsoft.AspNetCore.Http.Extensions;

namespace Todo.Service.Controllers
{
[ApiController]
public partial class AttachmentsOperationsController: ControllerBase
{

public AttachmentsOperationsController(IAttachmentsOperations operations)
{
    AttachmentsOperationsImpl = operations;
}
internal virtual IAttachmentsOperations AttachmentsOperationsImpl { get;}

        
        [HttpGet]
        [Route("/items/{itemId}/attachments")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(PageTodoAttachment))]
        public virtual async Task<IActionResult> List(long itemId)
        {
          var result = await AttachmentsOperationsImpl.ListAsync(itemId);
          return Ok(result);
        }

        
        [HttpPost]
        [Route("/items/{itemId}/attachments")]
        [ProducesResponseType((int)HttpStatusCode.NoContent, Type = typeof(void))]
        public virtual async Task<IActionResult> CreateJsonAttachment(long itemId, TodoAttachment body)
        {
          await AttachmentsOperationsImpl.CreateJsonAttachmentAsync(itemId, body);
          return NoContent();
        }

        
        [HttpPost]
        [Route("/items/{itemId}/attachments")]
        [Consumes("multipart/form-data")]
        [ProducesResponseType((int)HttpStatusCode.NoContent, Type = typeof(void))]
        public virtual async Task<IActionResult> CreateFileAttachment(long itemId)
        {
          var boundary = Request.GetMultipartBoundary();
          if (boundary == null)
          {
             return BadRequest("Request missing multipart boundary");
          }


          var reader = new MultipartReader(boundary, Request.Body);
          await AttachmentsOperationsImpl.CreateFileAttachmentAsync(itemId, reader);
          return NoContent();
        }

}
}
