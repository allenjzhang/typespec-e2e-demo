// Licensed under the MIT License.

import { GetitdoneContext } from "../../../api/getitdoneContext.js";
import {
  ProjectsProjectOpsGetCollaboratorsOptionalParams,
  ProjectsProjectOpsDeleteProjectOptionalParams,
  ProjectsProjectOpsUpdateProjectOptionalParams,
  ProjectsProjectOpsGetProjectOptionalParams,
} from "../../../api/options.js";
import {
  getCollaborators,
  deleteProject,
  updateProject,
  getProject,
} from "../../../api/projects/projectOps/index.js";
import {
  Project,
  UpdateProjectRequest,
  Collaborator,
} from "../../../models/models.js";

/** Interface representing a ProjectsProjectOps operations. */
export interface ProjectsProjectOpsOperations {
  getCollaborators: (
    projectId: string,
    options?: ProjectsProjectOpsGetCollaboratorsOptionalParams,
  ) => Promise<Collaborator[]>;
  deleteProject: (
    projectId: string,
    options?: ProjectsProjectOpsDeleteProjectOptionalParams,
  ) => Promise<void>;
  updateProject: (
    projectId: string,
    body: UpdateProjectRequest,
    options?: ProjectsProjectOpsUpdateProjectOptionalParams,
  ) => Promise<Project>;
  getProject: (
    projectId: string,
    options?: ProjectsProjectOpsGetProjectOptionalParams,
  ) => Promise<Project>;
}

export function getProjectsProjectOps(context: GetitdoneContext) {
  return {
    getCollaborators: (
      projectId: string,
      options?: ProjectsProjectOpsGetCollaboratorsOptionalParams,
    ) => getCollaborators(context, projectId, options),
    deleteProject: (
      projectId: string,
      options?: ProjectsProjectOpsDeleteProjectOptionalParams,
    ) => deleteProject(context, projectId, options),
    updateProject: (
      projectId: string,
      body: UpdateProjectRequest,
      options?: ProjectsProjectOpsUpdateProjectOptionalParams,
    ) => updateProject(context, projectId, body, options),
    getProject: (
      projectId: string,
      options?: ProjectsProjectOpsGetProjectOptionalParams,
    ) => getProject(context, projectId, options),
  };
}

export function getProjectsProjectOpsOperations(
  context: GetitdoneContext,
): ProjectsProjectOpsOperations {
  return {
    ...getProjectsProjectOps(context),
  };
}
