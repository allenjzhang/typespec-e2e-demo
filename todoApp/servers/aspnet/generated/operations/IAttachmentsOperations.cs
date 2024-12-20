// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// <auto-generated />

using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Todo.Service.Models;

namespace Todo.Service
{

    public interface IAttachmentsOperations
    {
        Task<PageTodoAttachment> ListAsync(long itemId);
        Task CreateJsonAttachmentAsync(long itemId, TodoAttachment contents);
        Task CreateFileAttachmentAsync(MultipartReader reader);

    }
}
