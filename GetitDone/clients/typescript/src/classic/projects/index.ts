// Licensed under the MIT License.

import { GetitdoneContext } from "../../api/getitdoneContext.js";
import {
  ProjectsCreateProjectOptionalParams,
  ProjectsGetProjectsOptionalParams,
} from "../../api/options.js";
import { createProject, getProjects } from "../../api/projects/index.js";
import { Project, CreateProjectRequest } from "../../models/models.js";
import {
  ProjectsProjectOpsOperations,
  getProjectsProjectOpsOperations,
} from "./projectOps/index.js";

/** Interface representing a Projects operations. */
export interface ProjectsOperations {
  createProject: (
    body: CreateProjectRequest,
    options?: ProjectsCreateProjectOptionalParams,
  ) => Promise<Project>;
  getProjects: (
    options?: ProjectsGetProjectsOptionalParams,
  ) => Promise<Project[]>;
  projectOps: ProjectsProjectOpsOperations;
}

function _getProjects(context: GetitdoneContext) {
  return {
    createProject: (
      body: CreateProjectRequest,
      options?: ProjectsCreateProjectOptionalParams,
    ) => createProject(context, body, options),
    getProjects: (options?: ProjectsGetProjectsOptionalParams) =>
      getProjects(context, options),
  };
}

export function getProjectsOperations(
  context: GetitdoneContext,
): ProjectsOperations {
  return {
    ..._getProjects(context),
    projectOps: getProjectsProjectOpsOperations(context),
  };
}
