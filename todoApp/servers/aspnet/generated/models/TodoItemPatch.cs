// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
// <auto-generated />

using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace Todo.Service.Models
{

    public partial class TodoItemPatch
    {
        ///<summary>
        /// The item's title
        ///</summary>
        [TypeSpec.Helpers.JsonConverters.StringConstraint(MaxLength = 255)]
        public string Title { get; set; }

        ///<summary>
        /// User that the todo is assigned to
        ///</summary>
        public long AssignedTo { get; set; }

        ///<summary>
        /// A longer description of the todo item in markdown format
        ///</summary>
        public string Description { get; set; }

        ///<summary>
        /// The status of the todo item
        ///</summary>
        public string Status { get; set; }


    }
}
