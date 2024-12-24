// <auto-generated/>

#nullable disable

using System;
using System.Collections.Generic;

namespace Getitdone.Models
{
    /// <summary> The UpdateProjectRequest. </summary>
    public partial class UpdateProjectRequest
    {
        /// <summary> Keeps track of any properties unknown to the library. </summary>
        private protected readonly IDictionary<string, BinaryData> _additionalBinaryDataProperties;

        /// <summary> Initializes a new instance of <see cref="UpdateProjectRequest"/>. </summary>
        public UpdateProjectRequest()
        {
        }

        internal UpdateProjectRequest(string name, string color, string parentId, int? order, bool? isFavorite, IDictionary<string, BinaryData> additionalBinaryDataProperties)
        {
            Name = name;
            Color = color;
            ParentId = parentId;
            Order = order;
            IsFavorite = isFavorite;
            _additionalBinaryDataProperties = additionalBinaryDataProperties;
        }

        /// <summary> Gets or sets the Name. </summary>
        public string Name { get; set; }

        /// <summary> Gets or sets the Color. </summary>
        public string Color { get; set; }

        /// <summary> Gets or sets the ParentId. </summary>
        public string ParentId { get; set; }

        /// <summary> Gets or sets the Order. </summary>
        public int? Order { get; set; }

        /// <summary> Gets or sets the IsFavorite. </summary>
        public bool? IsFavorite { get; set; }
    }
}
