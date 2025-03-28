// Generated by @typespec/http-server-csharp
// <auto-generated />
#nullable enable

using System;using System.Net;using System.Threading.Tasks;using System.Text.Json;using System.Text.Json.Serialization;using Microsoft.AspNetCore.Mvc;using PetStore.Service.Models;using PetStore.Service;

namespace PetStore.Service.Controllers
{
[ApiController]
public partial class OwnersController: ControllerBase
{

public OwnersController(IOwners operations)
{
    OwnersImpl = operations;
}
internal virtual IOwners OwnersImpl { get;}

        ///<summary>
/// Gets an instance of the resource.
///</summary>
        [HttpGet]
        [Route("/owners/{ownerId}")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(Owner))]
        public virtual async Task<IActionResult> Get(long ownerId)
        {
          var result = await OwnersImpl.GetAsync(ownerId);
          return Ok(result);
        }

        ///<summary>
/// Updates an existing instance of the resource.
///</summary>
        [HttpPatch]
        [Route("/owners/{ownerId}")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(Owner))]
        public virtual async Task<IActionResult> Update(long ownerId, OwnerUpdate body)
        {
          var result = await OwnersImpl.UpdateAsync(ownerId, body);
          return Ok(result);
        }

        ///<summary>
/// Deletes an existing instance of the resource.
///</summary>
        [HttpDelete]
        [Route("/owners/{ownerId}")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(void))]
        public virtual async Task<IActionResult> Delete(long ownerId)
        {
          await OwnersImpl.DeleteAsync(ownerId);
          return Ok();
        }

        ///<summary>
/// Creates a new instance of the resource.
///</summary>
        [HttpPost]
        [Route("/owners")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(Owner))]
[ProducesResponseType((int)HttpStatusCode.Created, Type = typeof(Owner))]
        public virtual async Task<IActionResult> Create(OwnerCreate body)
        {
          var result = await OwnersImpl.CreateAsync(body);
          return Ok(result);
        }

        ///<summary>
/// Lists all instances of the resource.
///</summary>
        [HttpGet]
        [Route("/owners")]
        [ProducesResponseType((int)HttpStatusCode.OK, Type = typeof(OwnerCollectionWithNextLink))]
        public virtual async Task<IActionResult> List()
        {
          var result = await OwnersImpl.ListAsync();
          return Ok(result);
        }

}
}
