// <auto-generated/>

#nullable disable

using System;
using System.Collections.Generic;
using TypeSpec.Http;

namespace Todo
{
    /// <summary> The ToDoItemMultipartRequest. </summary>
    internal partial class ToDoItemMultipartRequest
    {
        /// <summary> Keeps track of any properties unknown to the library. </summary>
        private protected readonly IDictionary<string, BinaryData> _additionalBinaryDataProperties;

        /// <summary> Initializes a new instance of <see cref="ToDoItemMultipartRequest"/>. </summary>
        /// <param name="item"></param>
        /// <exception cref="ArgumentNullException"> <paramref name="item"/> is null. </exception>
        public ToDoItemMultipartRequest(TodoItem item)
        {
            Argument.AssertNotNull(item, nameof(item));

            Item = item;
            Attachments = new ChangeTrackingList<File>();
        }

        internal ToDoItemMultipartRequest(TodoItem item, IList<File> attachments, IDictionary<string, BinaryData> additionalBinaryDataProperties)
        {
            Item = item;
            Attachments = attachments;
            _additionalBinaryDataProperties = additionalBinaryDataProperties;
        }

        /// <summary> Gets the Item. </summary>
        public TodoItem Item { get; }

        /// <summary> Gets the Attachments. </summary>
        public IList<File> Attachments { get; }
    }
}
