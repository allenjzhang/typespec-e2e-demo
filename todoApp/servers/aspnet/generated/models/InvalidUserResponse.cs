// Generated by @typespec/http-server-csharp
// <auto-generated />

      using System;using System.Text.Json;using System.Text.Json.Serialization;using TypeSpec.Helpers.JsonConverters;
      
      namespace Todo.Service.Models {

      ///<summary>
/// The user is invalid (e.g. forgot to enter email address)
///</summary>
public partial class InvalidUserResponse : ApiError {
      public new string Code { get; } = "invalid-user";

    
    }
   } 
