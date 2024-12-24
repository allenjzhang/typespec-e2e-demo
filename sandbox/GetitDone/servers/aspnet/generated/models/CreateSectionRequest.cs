// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// <auto-generated />

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Getitdone.Service.Models
{

    public partial class CreateSectionRequest
    {
        public string Name { get; set; }

        [JsonPropertyName("project_id")]
        public string ProjectId { get; set; }

        public int? Order { get; set; }


    }
}
