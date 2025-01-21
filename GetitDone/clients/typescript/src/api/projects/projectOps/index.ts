// Licensed under the MIT License.

import {
  GetitdoneContext as Client,
  ProjectsProjectOpsDeleteProjectOptionalParams,
  ProjectsProjectOpsGetCollaboratorsOptionalParams,
  ProjectsProjectOpsGetProjectOptionalParams,
  ProjectsProjectOpsUpdateProjectOptionalParams,
} from "../../index.js";
import {
  Project,
  projectDeserializer,
  UpdateProjectRequest,
  updateProjectRequestSerializer,
  Collaborator,
  collaboratorArrayDeserializer,
} from "../../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@typespec/ts-http-runtime";

export function _getCollaboratorsSend(
  context: Client,
  projectId: string,
  options: ProjectsProjectOpsGetCollaboratorsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/projects/{project_id}/collaborators", projectId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getCollaboratorsDeserialize(
  result: PathUncheckedResponse,
): Promise<Collaborator[]> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return collaboratorArrayDeserializer(result.body);
}

export async function getCollaborators(
  context: Client,
  projectId: string,
  options: ProjectsProjectOpsGetCollaboratorsOptionalParams = {
    requestOptions: {},
  },
): Promise<Collaborator[]> {
  const result = await _getCollaboratorsSend(context, projectId, options);
  return _getCollaboratorsDeserialize(result);
}

export function _deleteProjectSend(
  context: Client,
  projectId: string,
  options: ProjectsProjectOpsDeleteProjectOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/projects/{project_id}", projectId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteProjectDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

export async function deleteProject(
  context: Client,
  projectId: string,
  options: ProjectsProjectOpsDeleteProjectOptionalParams = {
    requestOptions: {},
  },
): Promise<void> {
  const result = await _deleteProjectSend(context, projectId, options);
  return _deleteProjectDeserialize(result);
}

export function _updateProjectSend(
  context: Client,
  projectId: string,
  body: UpdateProjectRequest,
  options: ProjectsProjectOpsUpdateProjectOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/projects/{project_id}", projectId)
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: updateProjectRequestSerializer(body),
    });
}

export async function _updateProjectDeserialize(
  result: PathUncheckedResponse,
): Promise<Project> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return projectDeserializer(result.body);
}

export async function updateProject(
  context: Client,
  projectId: string,
  body: UpdateProjectRequest,
  options: ProjectsProjectOpsUpdateProjectOptionalParams = {
    requestOptions: {},
  },
): Promise<Project> {
  const result = await _updateProjectSend(context, projectId, body, options);
  return _updateProjectDeserialize(result);
}

export function _getProjectSend(
  context: Client,
  projectId: string,
  options: ProjectsProjectOpsGetProjectOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/projects/{project_id}", projectId)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getProjectDeserialize(
  result: PathUncheckedResponse,
): Promise<Project> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return projectDeserializer(result.body);
}

export async function getProject(
  context: Client,
  projectId: string,
  options: ProjectsProjectOpsGetProjectOptionalParams = { requestOptions: {} },
): Promise<Project> {
  const result = await _getProjectSend(context, projectId, options);
  return _getProjectDeserialize(result);
}
