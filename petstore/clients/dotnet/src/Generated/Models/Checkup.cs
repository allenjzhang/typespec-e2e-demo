// <auto-generated/>

#nullable disable

using System;
using System.Collections.Generic;

namespace PetStore
{
    /// <summary> The Checkup. </summary>
    public partial class Checkup
    {
        /// <summary> Keeps track of any properties unknown to the library. </summary>
        private protected readonly IDictionary<string, BinaryData> _additionalBinaryDataProperties;

        internal Checkup(int id, string vetName, string notes)
        {
            Id = id;
            VetName = vetName;
            Notes = notes;
        }

        internal Checkup(int id, string vetName, string notes, IDictionary<string, BinaryData> additionalBinaryDataProperties)
        {
            Id = id;
            VetName = vetName;
            Notes = notes;
            _additionalBinaryDataProperties = additionalBinaryDataProperties;
        }

        /// <summary> Gets the Id. </summary>
        public int Id { get; }

        /// <summary> Gets the VetName. </summary>
        public string VetName { get; }

        /// <summary> Gets the Notes. </summary>
        public string Notes { get; }
    }
}
