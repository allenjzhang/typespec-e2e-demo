// Licensed under the MIT License.

import {
  GetitdoneContext as Client,
  CommentsCreateCommentOptionalParams,
  CommentsGetCommentsOptionalParams,
} from "../index.js";
import {
  Comment,
  commentDeserializer,
  CreateCommentRequest,
  createCommentRequestSerializer,
  commentArrayDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _createCommentSend(
  context: Client,
  body: CreateCommentRequest,
  options: CommentsCreateCommentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/comments")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: createCommentRequestSerializer(body),
    });
}

export async function _createCommentDeserialize(
  result: PathUncheckedResponse,
): Promise<Comment> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return commentDeserializer(result.body);
}

export async function createComment(
  context: Client,
  body: CreateCommentRequest,
  options: CommentsCreateCommentOptionalParams = { requestOptions: {} },
): Promise<Comment> {
  const result = await _createCommentSend(context, body, options);
  return _createCommentDeserialize(result);
}

export function _getCommentsSend(
  context: Client,
  options: CommentsGetCommentsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/comments")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        todoitem_id: options?.todoitemId,
        project_id: options?.projectId,
      },
    });
}

export async function _getCommentsDeserialize(
  result: PathUncheckedResponse,
): Promise<Comment[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return commentArrayDeserializer(result.body);
}

export async function getComments(
  context: Client,
  options: CommentsGetCommentsOptionalParams = { requestOptions: {} },
): Promise<Comment[]> {
  const result = await _getCommentsSend(context, options);
  return _getCommentsDeserialize(result);
}
