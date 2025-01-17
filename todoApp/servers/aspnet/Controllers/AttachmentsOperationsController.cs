using Microsoft.AspNetCore.Mvc;
using Todo.Service.Common;
using Todo.Service.Impl;
using Todo.Service.Models;

namespace Todo.Service.Controllers
{
    public class AttachmentsOperationsController : AttachmentsOperationsControllerBase
    {
        public AttachmentsOperationsController(IResourceStore<long, List<TodoAttachment>> store) {
            AttachmentsOperationsImpl = new AttachmentsOperations(store);
        }
        internal override IAttachmentsOperations AttachmentsOperationsImpl { get;  }

        public override async Task<IActionResult> CreateJsonAttachment(long itemId, TodoAttachment body)
        {
            await base.CreateJsonAttachment(itemId, body);
            return NoContent(); // we have to override this because originally this method is returning Ok(200) but the spec is not written in this way therefore this will cause error on client side
        }

        public override async Task<IActionResult> CreateFileAttachment(long itemId)
        {
            await base.CreateFileAttachment(itemId);
            return NoContent(); // we have to override this because originally this method is returning Ok(200) but the spec is not written in this way therefore this will cause error on client side
        }
    }
}
