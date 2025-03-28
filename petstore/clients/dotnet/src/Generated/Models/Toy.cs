// <auto-generated/>

#nullable disable

using System;
using System.Collections.Generic;

namespace PetStore
{
    /// <summary> The Toy. </summary>
    public partial class Toy
    {
        /// <summary> Keeps track of any properties unknown to the library. </summary>
        private protected readonly IDictionary<string, BinaryData> _additionalBinaryDataProperties;

        internal Toy(long id, long petId, string name)
        {
            Id = id;
            PetId = petId;
            Name = name;
        }

        internal Toy(long id, long petId, string name, IDictionary<string, BinaryData> additionalBinaryDataProperties)
        {
            Id = id;
            PetId = petId;
            Name = name;
            _additionalBinaryDataProperties = additionalBinaryDataProperties;
        }

        /// <summary> Gets the Id. </summary>
        public long Id { get; }

        /// <summary> Gets the PetId. </summary>
        public long PetId { get; }

        /// <summary> Gets the Name. </summary>
        public string Name { get; }
    }
}
