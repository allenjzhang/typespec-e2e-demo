## API Report File for "GetitdoneApi"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ClientOptions } from '@typespec/ts-http-runtime';
import { OperationOptions } from '@typespec/ts-http-runtime';
import { Pipeline } from '@typespec/ts-http-runtime';

// @public
export interface Attachment {
    // (undocumented)
    fileName: string;
    // (undocumented)
    fileType: string;
    // (undocumented)
    fileUrl: string;
    // (undocumented)
    resourceType: string;
}

// @public
export interface Collaborator {
    // (undocumented)
    email: string;
    // (undocumented)
    id: string;
    // (undocumented)
    name: string;
}

// @public
export interface Comment {
    // (undocumented)
    attachment?: Attachment;
    // (undocumented)
    content: string;
    // (undocumented)
    id: string;
    // (undocumented)
    postedAt: string;
    // (undocumented)
    projectId?: string;
    // (undocumented)
    todoitemId?: string;
}

// @public
export interface CommentsCommentOpsDeleteCommentOptionalParams extends OperationOptions {
}

// @public
export interface CommentsCommentOpsGetCommentOptionalParams extends OperationOptions {
}

// @public
export interface CommentsCommentOpsOperations {
    // (undocumented)
    deleteComment: (commentId: string, options?: CommentsCommentOpsDeleteCommentOptionalParams) => Promise<void>;
    // (undocumented)
    getComment: (commentId: string, options?: CommentsCommentOpsGetCommentOptionalParams) => Promise<Comment>;
    // (undocumented)
    updateComment: (commentId: string, body: UpdateCommentRequest, options?: CommentsCommentOpsUpdateCommentOptionalParams) => Promise<Comment>;
}

// @public
export interface CommentsCommentOpsUpdateCommentOptionalParams extends OperationOptions {
}

// @public
export interface CommentsCreateCommentOptionalParams extends OperationOptions {
}

// @public
export interface CommentsGetCommentsOptionalParams extends OperationOptions {
    // (undocumented)
    projectId?: string;
    // (undocumented)
    todoitemId?: string;
}

// @public
export interface CommentsOperations {
    // (undocumented)
    commentOps: CommentsCommentOpsOperations;
    // (undocumented)
    createComment: (body: CreateCommentRequest, options?: CommentsCreateCommentOptionalParams) => Promise<Comment>;
    // (undocumented)
    getComments: (options?: CommentsGetCommentsOptionalParams) => Promise<Comment[]>;
}

// @public
export interface CreateCommentRequest {
    // (undocumented)
    attachment?: Attachment;
    // (undocumented)
    content: string;
    // (undocumented)
    projectId?: string;
    // (undocumented)
    todoitemId?: string;
}

// @public
export interface CreateLabelRequest {
    // (undocumented)
    color?: string;
    // (undocumented)
    isFavorite?: boolean;
    // (undocumented)
    name: string;
    // (undocumented)
    order?: number;
}

// @public
export interface CreateProjectRequest {
    // (undocumented)
    color?: string;
    // (undocumented)
    isFavorite?: boolean;
    // (undocumented)
    name: string;
    // (undocumented)
    order?: number;
    // (undocumented)
    parentId?: string;
}

// @public
export interface CreateSectionRequest {
    // (undocumented)
    name: string;
    // (undocumented)
    order?: number;
    // (undocumented)
    projectId: string;
}

// @public
export interface CreateTodoItemRequest {
    // (undocumented)
    assigneeId?: string;
    // (undocumented)
    content: string;
    // (undocumented)
    description?: string;
    // (undocumented)
    due?: Due;
    // (undocumented)
    labels?: string[];
    // (undocumented)
    order?: number;
    // (undocumented)
    parentId?: string;
    // (undocumented)
    priority?: number;
    // (undocumented)
    projectId?: string;
    // (undocumented)
    sectionId?: string;
}

// @public
export interface Due {
    // (undocumented)
    date: string;
    // (undocumented)
    datetime?: string;
    // (undocumented)
    isRecurring: boolean;
    // (undocumented)
    string: string;
    // (undocumented)
    timezone?: string;
}

// @public (undocumented)
export class GetitdoneClient {
    constructor(options?: GetitdoneClientOptionalParams);
    readonly comments: CommentsOperations;
    readonly labels: LabelsOperations;
    readonly pipeline: Pipeline;
    readonly projects: ProjectsOperations;
    readonly sections: SectionsOperations;
    readonly todoItems: TodoItemsOperations;
}

// @public
export interface GetitdoneClientOptionalParams extends ClientOptions {
}

// @public
export interface Label {
    // (undocumented)
    color: string;
    // (undocumented)
    id: string;
    // (undocumented)
    isFavorite: boolean;
    // (undocumented)
    name: string;
    // (undocumented)
    order: number;
}

// @public
export interface LabelsCreateLabelOptionalParams extends OperationOptions {
}

// @public
export interface LabelsGetPersonalLabelsOptionalParams extends OperationOptions {
}

// @public
export interface LabelsLabelOpsDeleteLabelOptionalParams extends OperationOptions {
}

// @public
export interface LabelsLabelOpsGetPersonalLabelOptionalParams extends OperationOptions {
}

// @public
export interface LabelsLabelOpsOperations {
    // (undocumented)
    deleteLabel: (labelId: string, options?: LabelsLabelOpsDeleteLabelOptionalParams) => Promise<void>;
    // (undocumented)
    getPersonalLabel: (labelId: string, options?: LabelsLabelOpsGetPersonalLabelOptionalParams) => Promise<Label>;
    // (undocumented)
    updateLabel: (labelId: string, body: UpdateLabelRequest, options?: LabelsLabelOpsUpdateLabelOptionalParams) => Promise<Label>;
}

// @public
export interface LabelsLabelOpsUpdateLabelOptionalParams extends OperationOptions {
}

// @public
export interface LabelsOperations {
    // (undocumented)
    createLabel: (body: CreateLabelRequest, options?: LabelsCreateLabelOptionalParams) => Promise<Label>;
    // (undocumented)
    getPersonalLabels: (options?: LabelsGetPersonalLabelsOptionalParams) => Promise<Label[]>;
    // (undocumented)
    labelOps: LabelsLabelOpsOperations;
    // (undocumented)
    sharedLabels: LabelsSharedLabelsOperations;
}

// @public
export interface LabelsSharedLabelsGetSharedLabelsOptionalParams extends OperationOptions {
}

// @public
export interface LabelsSharedLabelsOperations {
    // (undocumented)
    getSharedLabels: (options?: LabelsSharedLabelsGetSharedLabelsOptionalParams) => Promise<Label[]>;
    // (undocumented)
    removeSharedLabel: (body: RemoveSharedLabelRequest, options?: LabelsSharedLabelsRemoveSharedLabelOptionalParams) => Promise<void>;
    // (undocumented)
    renameSharedLabel: (body: RenameSharedLabelRequest, options?: LabelsSharedLabelsRenameSharedLabelOptionalParams) => Promise<void>;
}

// @public
export interface LabelsSharedLabelsRemoveSharedLabelOptionalParams extends OperationOptions {
}

// @public
export interface LabelsSharedLabelsRenameSharedLabelOptionalParams extends OperationOptions {
}

// @public
export interface Project {
    // (undocumented)
    color: string;
    // (undocumented)
    commentCount: number;
    // (undocumented)
    id: string;
    // (undocumented)
    isFavorite: boolean;
    // (undocumented)
    isInboxProject: boolean;
    // (undocumented)
    isShared: boolean;
    // (undocumented)
    isTeamInbox: boolean;
    // (undocumented)
    name: string;
    // (undocumented)
    order: number;
    // (undocumented)
    parentId?: string;
    // (undocumented)
    url: string;
    // (undocumented)
    viewStyle: string;
}

// @public
export interface ProjectsCreateProjectOptionalParams extends OperationOptions {
}

// @public
export interface ProjectsGetProjectsOptionalParams extends OperationOptions {
}

// @public
export interface ProjectsOperations {
    // (undocumented)
    createProject: (body: CreateProjectRequest, options?: ProjectsCreateProjectOptionalParams) => Promise<Project>;
    // (undocumented)
    getProjects: (options?: ProjectsGetProjectsOptionalParams) => Promise<Project[]>;
    // (undocumented)
    projectOps: ProjectsProjectOpsOperations;
}

// @public
export interface ProjectsProjectOpsDeleteProjectOptionalParams extends OperationOptions {
}

// @public
export interface ProjectsProjectOpsGetCollaboratorsOptionalParams extends OperationOptions {
}

// @public
export interface ProjectsProjectOpsGetProjectOptionalParams extends OperationOptions {
}

// @public
export interface ProjectsProjectOpsOperations {
    // (undocumented)
    deleteProject: (projectId: string, options?: ProjectsProjectOpsDeleteProjectOptionalParams) => Promise<void>;
    // (undocumented)
    getCollaborators: (projectId: string, options?: ProjectsProjectOpsGetCollaboratorsOptionalParams) => Promise<Collaborator[]>;
    // (undocumented)
    getProject: (projectId: string, options?: ProjectsProjectOpsGetProjectOptionalParams) => Promise<Project>;
    // (undocumented)
    updateProject: (projectId: string, body: UpdateProjectRequest, options?: ProjectsProjectOpsUpdateProjectOptionalParams) => Promise<Project>;
}

// @public
export interface ProjectsProjectOpsUpdateProjectOptionalParams extends OperationOptions {
}

// @public
export interface RemoveSharedLabelRequest {
    // (undocumented)
    name: string;
}

// @public
export interface RenameSharedLabelRequest {
    // (undocumented)
    name: string;
    // (undocumented)
    newName: string;
}

// @public
export interface Section {
    // (undocumented)
    id: string;
    // (undocumented)
    name: string;
    // (undocumented)
    order: number;
    // (undocumented)
    projectId: string;
}

// @public
export interface SectionsCreateSectionOptionalParams extends OperationOptions {
}

// @public
export interface SectionsGetSectionsOptionalParams extends OperationOptions {
}

// @public
export interface SectionsOperations {
    // (undocumented)
    createSection: (body: CreateSectionRequest, options?: SectionsCreateSectionOptionalParams) => Promise<Section>;
    // (undocumented)
    getSections: (projectId: string, options?: SectionsGetSectionsOptionalParams) => Promise<Section[]>;
    // (undocumented)
    sectionOps: SectionsSectionOpsOperations;
}

// @public
export interface SectionsSectionOpsDeleteSectionOptionalParams extends OperationOptions {
}

// @public
export interface SectionsSectionOpsGetSectionOptionalParams extends OperationOptions {
}

// @public
export interface SectionsSectionOpsOperations {
    // (undocumented)
    deleteSection: (sectionId: string, options?: SectionsSectionOpsDeleteSectionOptionalParams) => Promise<void>;
    // (undocumented)
    getSection: (sectionId: string, options?: SectionsSectionOpsGetSectionOptionalParams) => Promise<Section>;
    // (undocumented)
    updateSection: (sectionId: string, body: UpdateSectionRequest, options?: SectionsSectionOpsUpdateSectionOptionalParams) => Promise<Section>;
}

// @public
export interface SectionsSectionOpsUpdateSectionOptionalParams extends OperationOptions {
}

// @public
export interface TodoItem {
    // (undocumented)
    assigneeId: string;
    // (undocumented)
    assignerId: string;
    // (undocumented)
    commentCount: number;
    // (undocumented)
    content: string;
    // (undocumented)
    createdAt: string;
    // (undocumented)
    creatorId: string;
    // (undocumented)
    description: string;
    // (undocumented)
    due?: Due;
    // (undocumented)
    duration?: string;
    // (undocumented)
    id: string;
    // (undocumented)
    isCompleted: boolean;
    // (undocumented)
    labels: string[];
    // (undocumented)
    order: number;
    // (undocumented)
    parentId?: string;
    // (undocumented)
    priority: number;
    // (undocumented)
    projectId: string;
    // (undocumented)
    sectionId?: string;
    // (undocumented)
    url: string;
}

// @public
export interface TodoItemsCreateTodoItemOptionalParams extends OperationOptions {
}

// @public
export interface TodoItemsGetTodoItemsOptionalParams extends OperationOptions {
}

// @public
export interface TodoItemsOperations {
    // (undocumented)
    createTodoItem: (body: CreateTodoItemRequest, options?: TodoItemsCreateTodoItemOptionalParams) => Promise<TodoItem>;
    // (undocumented)
    getTodoItems: (options?: TodoItemsGetTodoItemsOptionalParams) => Promise<TodoItem[]>;
    // (undocumented)
    todoItemOps: TodoItemsTodoItemOpsOperations;
}

// @public
export interface TodoItemsTodoItemOpsCloseTodoItemOptionalParams extends OperationOptions {
}

// @public
export interface TodoItemsTodoItemOpsDeleteTodoItemOptionalParams extends OperationOptions {
}

// @public
export interface TodoItemsTodoItemOpsGetTodoItemOptionalParams extends OperationOptions {
}

// @public
export interface TodoItemsTodoItemOpsOperations {
    // (undocumented)
    closeTodoItem: (todoitemId: string, options?: TodoItemsTodoItemOpsCloseTodoItemOptionalParams) => Promise<void>;
    // (undocumented)
    deleteTodoItem: (todoitemId: string, options?: TodoItemsTodoItemOpsDeleteTodoItemOptionalParams) => Promise<void>;
    // (undocumented)
    getTodoItem: (todoitemId: string, options?: TodoItemsTodoItemOpsGetTodoItemOptionalParams) => Promise<TodoItem>;
    // (undocumented)
    reopenTodoItem: (todoitemId: string, options?: TodoItemsTodoItemOpsReopenTodoItemOptionalParams) => Promise<void>;
    // (undocumented)
    updateTodoItem: (todoitemId: string, body: UpdateTodoItemRequest, options?: TodoItemsTodoItemOpsUpdateTodoItemOptionalParams) => Promise<TodoItem>;
}

// @public
export interface TodoItemsTodoItemOpsReopenTodoItemOptionalParams extends OperationOptions {
}

// @public
export interface TodoItemsTodoItemOpsUpdateTodoItemOptionalParams extends OperationOptions {
}

// @public
export interface UpdateCommentRequest {
    // (undocumented)
    attachment?: Attachment;
    // (undocumented)
    content?: string;
}

// @public
export interface UpdateLabelRequest {
    // (undocumented)
    color?: string;
    // (undocumented)
    isFavorite?: boolean;
    // (undocumented)
    name?: string;
    // (undocumented)
    order?: number;
}

// @public
export interface UpdateProjectRequest {
    // (undocumented)
    color?: string;
    // (undocumented)
    isFavorite?: boolean;
    // (undocumented)
    name?: string;
    // (undocumented)
    order?: number;
    // (undocumented)
    parentId?: string;
}

// @public
export interface UpdateSectionRequest {
    // (undocumented)
    name?: string;
    // (undocumented)
    order?: number;
}

// @public
export interface UpdateTodoItemRequest {
    // (undocumented)
    assigneeId?: string;
    // (undocumented)
    content?: string;
    // (undocumented)
    description?: string;
    // (undocumented)
    due?: Due;
    // (undocumented)
    labels?: string[];
    // (undocumented)
    order?: number;
    // (undocumented)
    parentId?: string;
    // (undocumented)
    priority?: number;
    // (undocumented)
    projectId?: string;
    // (undocumented)
    sectionId?: string;
}

// (No @packageDocumentation comment for this package)

```