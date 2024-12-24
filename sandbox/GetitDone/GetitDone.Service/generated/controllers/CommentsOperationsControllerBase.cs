// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// <auto-generated />

using System;
using System.Net;
using System.Threading.Tasks;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.AspNetCore.Mvc;
using Getitdone.Service.Models;
using Getitdone.Service;

namespace Getitdone.Service.Controllers
{
    [ApiController]
    public abstract partial class CommentsOperationsControllerBase : ControllerBase
    {

        internal abstract ICommentsOperations CommentsOperationsImpl { get; }


        [HttpGet]
        [Route("/comments")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(Comment[]))]
        public virtual async Task<IActionResult> GetComments([FromQuery(Name = "todoitem_id")] string todoitemId, [FromQuery(Name = "project_id")] string projectId)
        {
            var result = await CommentsOperationsImpl.GetCommentsAsync(todoitemId, projectId);
            return Ok(result);
        }


        [HttpPost]
        [Route("/comments")]
        [ProducesResponseType((int)HttpStatusCode.Created, Type = typeof(Comment))]
        public virtual async Task<IActionResult> CreateComment(CreateCommentRequest body)
        {
            var result = await CommentsOperationsImpl.CreateCommentAsync(body);
            return Ok(result);
        }

    }
}
