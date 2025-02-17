// Licensed under the MIT License.

import {
  GetitdoneContext as Client,
  ProjectsCreateProjectOptionalParams,
  ProjectsGetProjectsOptionalParams,
} from "../index.js";
import {
  Project,
  projectDeserializer,
  CreateProjectRequest,
  createProjectRequestSerializer,
  projectArrayDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _createProjectSend(
  context: Client,
  body: CreateProjectRequest,
  options: ProjectsCreateProjectOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/projects")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: createProjectRequestSerializer(body),
    });
}

export async function _createProjectDeserialize(
  result: PathUncheckedResponse,
): Promise<Project> {
  const expectedStatuses = ["201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return projectDeserializer(result.body);
}

export async function createProject(
  context: Client,
  body: CreateProjectRequest,
  options: ProjectsCreateProjectOptionalParams = { requestOptions: {} },
): Promise<Project> {
  const result = await _createProjectSend(context, body, options);
  return _createProjectDeserialize(result);
}

export function _getProjectsSend(
  context: Client,
  options: ProjectsGetProjectsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/projects")
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getProjectsDeserialize(
  result: PathUncheckedResponse,
): Promise<Project[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return projectArrayDeserializer(result.body);
}

export async function getProjects(
  context: Client,
  options: ProjectsGetProjectsOptionalParams = { requestOptions: {} },
): Promise<Project[]> {
  const result = await _getProjectsSend(context, options);
  return _getProjectsDeserialize(result);
}
