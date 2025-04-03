// Generated by @typespec/http-server-csharp
// <auto-generated />
#nullable enable

  using Microsoft.AspNetCore.Mvc;
  using Microsoft.AspNetCore.Mvc.Filters;

  namespace TypeSpec.Helpers
  {
    /// <summary>
    /// Represents an HTTP response exception with a status code and optional value.
    /// </summary>
    public class HttpServiceException : Exception
    {
      /// <summary>
      /// Initializes a new instance of the HttpServiceException class.
      /// </summary>
      /// <param name="statusCode">The HTTP status code.</param>
      /// <param name="value">The optional value to include in the response.</param>
      public HttpServiceException(int statusCode, object? value = null, Dictionary<string, string>? headers = null) =>
          (StatusCode, Value, Headers) = (statusCode, value, headers ?? new Dictionary<string, string>());

      public int StatusCode { get; }

      public object? Value { get; }

      public Dictionary<string, string> Headers { get; } 
    }

    /// <summary>
    /// An action filter that handles HttpServiceException and converts it to an HTTP response.
    /// </summary>
    public class HttpServiceExceptionFilter : IActionFilter, IOrderedFilter
    {
      public int Order => int.MaxValue - 10;

      public void OnActionExecuting(ActionExecutingContext context) { }

      public void OnActionExecuted(ActionExecutedContext context)
      {
        if (context.Exception is HttpServiceException httpServiceException)
        {
            foreach (var header in httpServiceException.Headers)
            {
                context.HttpContext.Response.Headers.Append(header.Key, header.Value.ToString());
            }

            context.Result = new ObjectResult(httpServiceException.Value)
            {
                StatusCode = httpServiceException.StatusCode
            };

            context.ExceptionHandled = true;
        }
      }
    }
  }
