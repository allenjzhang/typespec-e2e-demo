// Generated by @typespec/http-server-csharp
// <auto-generated />
#nullable enable

      using System;using System.Text.Json;using System.Text.Json.Serialization;using TypeSpec.Helpers.JsonConverters;using System.Net;using System.Threading.Tasks;using Microsoft.AspNetCore.Mvc;using PetStore.Service.Models;

      namespace PetStore.Service {

      public interface IPetInsurance {
      ///<summary>
/// Gets the singleton resource.
///</summary>
Task<Insurance> GetAsync( int petId);
///<summary>
/// Updates the singleton resource.
///</summary>
Task<Insurance> UpdateAsync( int petId, InsuranceUpdate body);

    }
   } 
