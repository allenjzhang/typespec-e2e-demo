// Generated by @typespec/http-server-csharp
// <auto-generated />

      using System;using System.Text.Json;using System.Text.Json.Serialization;using TypeSpec.Helpers.JsonConverters;
      
      namespace Todo.Service.Models {

      public partial class PaginationControls  {
      ///<summary>
/// The limit to the number of items
///</summary>
public int? Limit { get; set; } = 50;

    ///<summary>
/// The offset to start paginating at
///</summary>
public int? Offset { get; set; } = 0;

    
    }
   } 
