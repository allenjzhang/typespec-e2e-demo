// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// <auto-generated />

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Todo.Service.Models
{

    ///<summary>
    /// The user already exists
    ///</summary>
    public partial class UserExistsResponse : ApiError
    {
        public new string Code { get; } = "user-exists";


    }
}
