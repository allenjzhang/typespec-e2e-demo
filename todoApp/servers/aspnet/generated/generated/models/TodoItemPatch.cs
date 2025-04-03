// Generated by @typespec/http-server-csharp
// <auto-generated />

      using System;using System.Text.Json;using System.Text.Json.Serialization;using TypeSpec.Helpers.JsonConverters;using TypeSpec.Helpers;
      namespace Todo.Service.Models {

      public partial class TodoItemPatch  {
      ///<summary>
/// The item's title
///</summary>
[StringConstraint( MaxLength = 255)]
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
