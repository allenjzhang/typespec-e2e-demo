// Generated by @typespec/http-server-csharp
// <auto-generated />
#nullable enable

      using System;using System.Text.Json;using System.Text.Json.Serialization;using TypeSpec.Helpers.JsonConverters;using System.Net;using System.Threading.Tasks;using Microsoft.AspNetCore.Mvc;using PetStore.Service.Models;

      namespace PetStore.Service {

      public interface ICheckups {
      ///<summary>
/// Creates or update an instance of the resource.
///</summary>
Task<Checkup> CreateOrUpdateAsync( int checkupId, CheckupUpdate body);
///<summary>
/// Lists all instances of the resource.
///</summary>
Task<CheckupCollectionWithNextLink> ListAsync( );

    }
   } 
