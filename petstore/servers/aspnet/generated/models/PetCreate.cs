// Generated by @typespec/http-server-csharp
// <auto-generated />

      using System;using System.Text.Json;using System.Text.Json.Serialization;using TypeSpec.Helpers.JsonConverters;
      
      namespace PetStore.Service.Models {

      ///<summary>
/// Resource create operation model.
///</summary>
public partial class PetCreate  {
      public string Name { get; set; }

    public string Tag { get; set; }

    [NumericConstraint<int>( MinValue = 0, MaxValue = 20)]
public int Age { get; set; }

    public long OwnerId { get; set; }

    
    }
   } 
