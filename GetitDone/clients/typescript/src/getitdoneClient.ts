// Licensed under the MIT License.

import {
  getLabelsOperations,
  LabelsOperations,
} from "./classic/labels/index.js";
import {
  getCommentsOperations,
  CommentsOperations,
} from "./classic/comments/index.js";
import {
  getTodoItemsOperations,
  TodoItemsOperations,
} from "./classic/todoItems/index.js";
import {
  getSectionsOperations,
  SectionsOperations,
} from "./classic/sections/index.js";
import {
  getProjectsOperations,
  ProjectsOperations,
} from "./classic/projects/index.js";
import {
  createGetitdone,
  GetitdoneContext,
  GetitdoneClientOptionalParams,
} from "./api/index.js";
import { Pipeline } from "@typespec/ts-http-runtime";

export { GetitdoneClientOptionalParams } from "./api/getitdoneContext.js";

export class GetitdoneClient {
  private _client: GetitdoneContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  constructor(options: GetitdoneClientOptionalParams = {}) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createGetitdone({
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.labels = getLabelsOperations(this._client);
    this.comments = getCommentsOperations(this._client);
    this.todoItems = getTodoItemsOperations(this._client);
    this.sections = getSectionsOperations(this._client);
    this.projects = getProjectsOperations(this._client);
  }

  /** The operation groups for labels */
  public readonly labels: LabelsOperations;
  /** The operation groups for comments */
  public readonly comments: CommentsOperations;
  /** The operation groups for todoItems */
  public readonly todoItems: TodoItemsOperations;
  /** The operation groups for sections */
  public readonly sections: SectionsOperations;
  /** The operation groups for projects */
  public readonly projects: ProjectsOperations;
}
