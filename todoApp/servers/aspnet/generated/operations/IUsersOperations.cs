// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// <auto-generated />

using System;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Todo.Service.Models;

namespace Todo.Service
{

    public interface IUsersOperations
    {
        Task<UserCreatedResponse> CreateAsync(User user);

    }
}
