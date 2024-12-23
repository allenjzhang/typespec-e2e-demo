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
    public abstract partial class SectionsOperationsControllerBase : ControllerBase
    {

        internal abstract ISectionsOperations SectionsOperationsImpl { get; }


        [HttpGet]
        [Route("/sections")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(Section[]))]
        public virtual async Task<IActionResult> GetSections([FromQuery(Name = "project_id")] string projectId)
        {
            var result = await SectionsOperationsImpl.GetSectionsAsync(projectId);
            return Ok(result);
        }


        [HttpPost]
        [Route("/sections")]
        [ProducesResponseType((int)HttpStatusCode.Created, Type = typeof(Section))]
        public virtual async Task<IActionResult> CreateSection(CreateSectionRequest body)
        {
            var result = await SectionsOperationsImpl.CreateSectionAsync(body);
            return Ok(result);
        }

    }
}
