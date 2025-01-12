// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// <auto-generated />

using System;
using System.Net;
using System.Threading.Tasks;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;
using Todo.Service.Models;
using Todo.Service;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.AspNetCore.Http.Extensions;

namespace Todo.Service.Controllers
{
    [ApiController]
    public abstract partial class TodoItemsOperationsControllerBase : ControllerBase
    {

        internal abstract ITodoItemsOperations TodoItemsOperationsImpl { get; }


        [HttpGet]
        [Route("/items")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(TodoPage))]
        public virtual async Task<IActionResult> List([FromQuery(Name = "limit")] int limit = 50, [FromQuery(Name = "offset")] int offset = 0)
        {
            var result = await TodoItemsOperationsImpl.ListAsync(limit, offset);
            return Ok(result);
        }


        [HttpPost]
        [Route("/items")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(TodoItem))]
        public virtual async Task<IActionResult> CreateJson(Model0 body)
        {
            var result = await TodoItemsOperationsImpl.CreateJsonAsync(body?.Item, body?.Attachments);
            return Ok(result);
        }


        [HttpPost]
        [Route("/items")]
        [Consumes("multipart/form-data")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(TodoItem))]
        public virtual async Task<IActionResult> CreateForm()
        {
            var boundary = Request.GetMultipartBoundary();
            if (boundary == null)
            {
                return BadRequest("Request missing multipart boundary");
            }


            var reader = new MultipartReader(boundary, Request.Body);
            var result = await TodoItemsOperationsImpl.CreateFormAsync(reader);
            return Ok(result);
        }


        [HttpGet]
        [Route("/items/{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(TodoItem))]
        public virtual async Task<IActionResult> Get(long id)
        {
            var result = await TodoItemsOperationsImpl.GetAsync(id);
            return Ok(result);
        }


        [HttpPatch]
        [Route("/items/{id}")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(TodoItem))]
        public virtual async Task<IActionResult> Update(long id, TodoItemPatch body)
        {
            var result = await TodoItemsOperationsImpl.UpdateAsync(id, body);
            return Ok(result);
        }


        [HttpDelete]
        [Route("/items/{id}")]
        [ProducesResponseType((int)HttpStatusCode.NoContent, Type = typeof(void))]
        public virtual async Task<IActionResult> Delete(long id)
        {
            await TodoItemsOperationsImpl.DeleteAsync(id);
            return Ok();
        }

    }
}
