// Licensed under the MIT License.

import {
  GetitdoneContext as Client,
  CommentsCommentOpsDeleteCommentOptionalParams,
  CommentsCommentOpsGetCommentOptionalParams,
  CommentsCommentOpsUpdateCommentOptionalParams,
} from "../../index.js";
import {
  Comment,
  commentDeserializer,
  UpdateCommentRequest,
  updateCommentRequestSerializer,
} from "../../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _deleteCommentSend(
  context: Client,
  commentId: string,
  options: CommentsCommentOpsDeleteCommentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/comments/{comment_id}", commentId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteCommentDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function deleteComment(
  context: Client,
  commentId: string,
  options: CommentsCommentOpsDeleteCommentOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _deleteCommentSend(context, commentId, options);
  return _deleteCommentDeserialize(result);
}

export function _updateCommentSend(
  context: Client,
  commentId: string,
  body: UpdateCommentRequest,
  options: CommentsCommentOpsUpdateCommentOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/comments/{comment_id}", commentId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: updateCommentRequestSerializer(body),
    });
}

export async function _updateCommentDeserialize(
  result: PathUncheckedResponse,
): Promise<Comment> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return commentDeserializer(result.body);
}

export async function updateComment(
  context: Client,
  commentId: string,
  body: UpdateCommentRequest,
  options: CommentsCommentOpsUpdateCommentOptionalParams = {
    requestOptions: {},
  },
): Promise<Comment> {
  const result = await _updateCommentSend(context, commentId, body, options);
  return _updateCommentDeserialize(result);
}

export function _getCommentSend(
  context: Client,
  commentId: string,
  options: CommentsCommentOpsGetCommentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/comments/{comment_id}", commentId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getCommentDeserialize(
  result: PathUncheckedResponse,
): Promise<Comment> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return commentDeserializer(result.body);
}

export async function getComment(
  context: Client,
  commentId: string,
  options: CommentsCommentOpsGetCommentOptionalParams = { requestOptions: {} },
): Promise<Comment> {
  const result = await _getCommentSend(context, commentId, options);
  return _getCommentDeserialize(result);
}
