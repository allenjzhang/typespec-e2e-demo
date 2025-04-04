// Generated by @typespec/http-server-csharp
// <auto-generated />

      using System;using System.Text.Json;using System.Text.Json.Serialization;using TypeSpec.Helpers.JsonConverters;
      
      namespace Microsoft.ContosoProviderHub.Service.Models {

      ///<summary>
/// A ContosoProviderHub resource
///</summary>
public partial class Employee : TrackedResource {
      ///<summary>
/// The resource-specific properties for this resource.
///</summary>
public EmployeeProperties Properties { get; set; }

    ///<summary>
/// The name of the Employee
///</summary>
[StringConstraint( Pattern = "^[a-zA-Z0-9-]{3,24}$")]
public new string Name { get; set; }

    
    }
   } 
