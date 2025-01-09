// Licensed under the MIT License.

import { GetitdoneContext } from "../../../api/getitdoneContext.js";
import {
  deleteComment,
  updateComment,
  getComment,
} from "../../../api/comments/commentOps/index.js";
import { Comment, UpdateCommentRequest } from "../../../models/models.js";
import {
  CommentsCommentOpsDeleteCommentOptionalParams,
  CommentsCommentOpsUpdateCommentOptionalParams,
  CommentsCommentOpsGetCommentOptionalParams,
} from "../../../api/options.js";

/** Interface representing a CommentsCommentOps operations. */
export interface CommentsCommentOpsOperations {
  deleteComment: (
    commentId: string,
    options?: CommentsCommentOpsDeleteCommentOptionalParams,
  ) => Promise<void>;
  updateComment: (
    commentId: string,
    body: UpdateCommentRequest,
    options?: CommentsCommentOpsUpdateCommentOptionalParams,
  ) => Promise<Comment>;
  getComment: (
    commentId: string,
    options?: CommentsCommentOpsGetCommentOptionalParams,
  ) => Promise<Comment>;
}

export function getCommentsCommentOps(context: GetitdoneContext) {
  return {
    deleteComment: (
      commentId: string,
      options?: CommentsCommentOpsDeleteCommentOptionalParams,
    ) => deleteComment(context, commentId, options),
    updateComment: (
      commentId: string,
      body: UpdateCommentRequest,
      options?: CommentsCommentOpsUpdateCommentOptionalParams,
    ) => updateComment(context, commentId, body, options),
    getComment: (
      commentId: string,
      options?: CommentsCommentOpsGetCommentOptionalParams,
    ) => getComment(context, commentId, options),
  };
}

export function getCommentsCommentOpsOperations(
  context: GetitdoneContext,
): CommentsCommentOpsOperations {
  return {
    ...getCommentsCommentOps(context),
  };
}
