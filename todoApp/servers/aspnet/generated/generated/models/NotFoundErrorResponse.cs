// Generated by @typespec/http-server-csharp
// <auto-generated />

      using System;using System.Text.Json;using System.Text.Json.Serialization;using TypeSpec.Helpers.JsonConverters;using TypeSpec.Helpers;
      namespace Todo.Service.Models {

      public partial class NotFoundErrorResponse : HttpServiceException {
      public NotFoundErrorResponse(string code = "not-found") : base(404, 
		 value: new{code = code}) 
        { 
		Code = code;
	}
public string Code { get; } = "not-found";

    
    }
   } 
