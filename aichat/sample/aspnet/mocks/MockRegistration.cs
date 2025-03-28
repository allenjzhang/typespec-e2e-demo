// Generated by @typespec/http-server-csharp
// <auto-generated />
  #nullable enable

using Microsoft.AspNetCore.Http.Features;
using AI.Chat.Service.Models;
using AI.Chat.Service;

namespace TypeSpec.Helpers
{
    /// <summary>
    /// Register Business Logic implementations. Replace with actual implementations when available.
    /// </summary>
    public static class MockRegistration
    {
        public static void Register(WebApplicationBuilder builder)
        {
            builder.Services.AddScoped<IJsonSerializationProvider, JsonSerializationProvider>();
            // Used for mock implementation only. Remove once business logic interfaces are implemented.
            builder.Services.AddSingleton<IDictionary<Type, object?>>(new Dictionary<Type, object?>());
            builder.Services.AddScoped<IInitializer, Initializer>();
            // Mock business logic implementations
            builder.Services.AddScoped<IChatOperations, ChatOperations>();
            // Included for multipart/form-data support
            builder.Services.Configure<FormOptions>(options =>
            {
                options.MemoryBufferThreshold = int.MaxValue;
                options.MultipartBodyLengthLimit = int.MaxValue;
            });
        }
    }
}