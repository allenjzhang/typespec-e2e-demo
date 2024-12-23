// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// <auto-generated />

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Getitdone.Service.Models
{

    public partial class ErrorResponse
    {
        public string Error { get; set; }

        [JsonPropertyName("status_code")]
        public int StatusCode { get; set; }


    }
}
