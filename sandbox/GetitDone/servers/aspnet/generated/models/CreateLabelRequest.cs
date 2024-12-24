// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// <auto-generated />

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Getitdone.Service.Models
{

    public partial class CreateLabelRequest
    {
        public string Name { get; set; }

        public string Color { get; set; }

        public int? Order { get; set; }

        [JsonPropertyName("is_favorite")]
        public bool? IsFavorite { get; set; }


    }
}
