// Generated by @typespec/http-server-csharp
// <auto-generated />

      using System;using System.Text.Json;using System.Text.Json.Serialization;
      
      namespace PetStore.Service.Models {

      ///<summary>
/// Paged response of Toy items
///</summary>
public partial class ToyCollectionWithNextLink  {
      ///<summary>
/// The items on this page
///</summary>
public Toy[] Value { get; set; }

    ///<summary>
/// The link to the next page of items
///</summary>
public string NextLink { get; set; }

    
    }
   } 
