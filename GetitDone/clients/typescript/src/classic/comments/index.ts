// Licensed under the MIT License.

import { GetitdoneContext } from "../../api/getitdoneContext.js";
import { createComment, getComments } from "../../api/comments/index.js";
import { Comment, CreateCommentRequest } from "../../models/models.js";
import {
  CommentsCreateCommentOptionalParams,
  CommentsGetCommentsOptionalParams,
} from "../../api/options.js";
import {
  CommentsCommentOpsOperations,
  getCommentsCommentOpsOperations,
} from "./commentOps/index.js";

/** Interface representing a Comments operations. */
export interface CommentsOperations {
  createComment: (
    body: CreateCommentRequest,
    options?: CommentsCreateCommentOptionalParams,
  ) => Promise<Comment>;
  getComments: (
    options?: CommentsGetCommentsOptionalParams,
  ) => Promise<Comment[]>;
  commentOps: CommentsCommentOpsOperations;
}

function _getComments(context: GetitdoneContext) {
  return {
    createComment: (
      body: CreateCommentRequest,
      options?: CommentsCreateCommentOptionalParams,
    ) => createComment(context, body, options),
    getComments: (options?: CommentsGetCommentsOptionalParams) =>
      getComments(context, options),
  };
}

export function getCommentsOperations(
  context: GetitdoneContext,
): CommentsOperations {
  return {
    ..._getComments(context),
    commentOps: getCommentsCommentOpsOperations(context),
  };
}
