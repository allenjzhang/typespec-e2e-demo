// Generated by @typespec/http-server-csharp
// <auto-generated />

      using System;using System.Text.Json;using System.Text.Json.Serialization;
      
      namespace Todo.Service.Models {

      public partial class TodoAttachment  {
      ///<summary>
/// The file name of the attachment
///</summary>
[TypeSpec.Helpers.JsonConverters.StringConstraint( MaxLength = 255)]
public string Filename { get; set; }

    ///<summary>
/// The media type of the attachment
///</summary>
public string MediaType { get; set; }

    ///<summary>
/// The contents of the file
///</summary>
public byte[] Contents { get; set; }

    
    }
   } 
