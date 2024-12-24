// <auto-generated/>

#nullable disable

using System;
using System.Collections.Generic;
using Getitdone;

namespace Getitdone.Models
{
    /// <summary> The UpdateTodoItemRequest. </summary>
    public partial class UpdateTodoItemRequest
    {
        /// <summary> Keeps track of any properties unknown to the library. </summary>
        private protected readonly IDictionary<string, BinaryData> _additionalBinaryDataProperties;

        /// <summary> Initializes a new instance of <see cref="UpdateTodoItemRequest"/>. </summary>
        public UpdateTodoItemRequest()
        {
            Labels = new ChangeTrackingList<string>();
        }

        internal UpdateTodoItemRequest(string content, string description, Due due, IList<string> labels, int? priority, string parentId, int? order, string projectId, string sectionId, string assigneeId, IDictionary<string, BinaryData> additionalBinaryDataProperties)
        {
            Content = content;
            Description = description;
            Due = due;
            Labels = labels;
            Priority = priority;
            ParentId = parentId;
            Order = order;
            ProjectId = projectId;
            SectionId = sectionId;
            AssigneeId = assigneeId;
            _additionalBinaryDataProperties = additionalBinaryDataProperties;
        }

        /// <summary> Gets or sets the Content. </summary>
        public string Content { get; set; }

        /// <summary> Gets or sets the Description. </summary>
        public string Description { get; set; }

        /// <summary> Gets or sets the Due. </summary>
        public Due Due { get; set; }

        /// <summary> Gets the Labels. </summary>
        public IList<string> Labels { get; }

        /// <summary> Gets or sets the Priority. </summary>
        public int? Priority { get; set; }

        /// <summary> Gets or sets the ParentId. </summary>
        public string ParentId { get; set; }

        /// <summary> Gets or sets the Order. </summary>
        public int? Order { get; set; }

        /// <summary> Gets or sets the ProjectId. </summary>
        public string ProjectId { get; set; }

        /// <summary> Gets or sets the SectionId. </summary>
        public string SectionId { get; set; }

        /// <summary> Gets or sets the AssigneeId. </summary>
        public string AssigneeId { get; set; }
    }
}