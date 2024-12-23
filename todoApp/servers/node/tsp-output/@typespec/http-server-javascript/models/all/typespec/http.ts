// Generated by Microsoft TypeSpec

export interface TodoItemHttpPart {}

export interface ArrayHttpPart {}

/**
 * There is no content to send for this request, but the headers may be useful.
 */
export interface NoContentResponse {
  /**
   * The status code.
   */
  statusCode: 204;
}

/**
 * The server cannot find the requested resource.
 */
export interface NotFoundResponse {
  /**
   * The status code.
   */
  statusCode: 404;
}
