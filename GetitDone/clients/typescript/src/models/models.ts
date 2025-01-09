// Licensed under the MIT License.

/** model interface Label */
export interface Label {
  id: string;
  name: string;
  color: string;
  order: number;
  isFavorite: boolean;
}

export function labelDeserializer(item: any): Label {
  return {
    id: item["id"],
    name: item["name"],
    color: item["color"],
    order: item["order"],
    isFavorite: item["is_favorite"],
  };
}

/** model interface CreateLabelRequest */
export interface CreateLabelRequest {
  name: string;
  color?: string;
  order?: number;
  isFavorite?: boolean;
}

export function createLabelRequestSerializer(item: CreateLabelRequest): any {
  return {
    name: item["name"],
    color: item["color"],
    order: item["order"],
    is_favorite: item["isFavorite"],
  };
}

/** model interface RenameSharedLabelRequest */
export interface RenameSharedLabelRequest {
  name: string;
  newName: string;
}

export function renameSharedLabelRequestSerializer(
  item: RenameSharedLabelRequest,
): any {
  return { name: item["name"], new_name: item["newName"] };
}

/** model interface RemoveSharedLabelRequest */
export interface RemoveSharedLabelRequest {
  name: string;
}

export function removeSharedLabelRequestSerializer(
  item: RemoveSharedLabelRequest,
): any {
  return { name: item["name"] };
}

/** model interface UpdateLabelRequest */
export interface UpdateLabelRequest {
  name?: string;
  color?: string;
  order?: number;
  isFavorite?: boolean;
}

export function updateLabelRequestSerializer(item: UpdateLabelRequest): any {
  return {
    name: item["name"],
    color: item["color"],
    order: item["order"],
    is_favorite: item["isFavorite"],
  };
}

/** model interface Comment */
export interface Comment {
  content: string;
  id: string;
  postedAt: string;
  projectId?: string;
  todoitemId?: string;
  attachment?: Attachment;
}

export function commentDeserializer(item: any): Comment {
  return {
    content: item["content"],
    id: item["id"],
    postedAt: item["posted_at"],
    projectId: item["project_id"],
    todoitemId: item["todoitem_id"],
    attachment: !item["attachment"]
      ? item["attachment"]
      : attachmentDeserializer(item["attachment"]),
  };
}

/** model interface Attachment */
export interface Attachment {
  fileName: string;
  fileType: string;
  fileUrl: string;
  resourceType: string;
}

export function attachmentSerializer(item: Attachment): any {
  return {
    file_name: item["fileName"],
    file_type: item["fileType"],
    file_url: item["fileUrl"],
    resource_type: item["resourceType"],
  };
}

export function attachmentDeserializer(item: any): Attachment {
  return {
    fileName: item["file_name"],
    fileType: item["file_type"],
    fileUrl: item["file_url"],
    resourceType: item["resource_type"],
  };
}

/** model interface CreateCommentRequest */
export interface CreateCommentRequest {
  content: string;
  todoitemId?: string;
  projectId?: string;
  attachment?: Attachment;
}

export function createCommentRequestSerializer(
  item: CreateCommentRequest,
): any {
  return {
    content: item["content"],
    todoitem_id: item["todoitemId"],
    project_id: item["projectId"],
    attachment: !item["attachment"]
      ? item["attachment"]
      : attachmentSerializer(item["attachment"]),
  };
}

/** model interface UpdateCommentRequest */
export interface UpdateCommentRequest {
  content?: string;
  attachment?: Attachment;
}

export function updateCommentRequestSerializer(
  item: UpdateCommentRequest,
): any {
  return {
    content: item["content"],
    attachment: !item["attachment"]
      ? item["attachment"]
      : attachmentSerializer(item["attachment"]),
  };
}

/** model interface TodoItem */
export interface TodoItem {
  creatorId: string;
  createdAt: string;
  assigneeId: string;
  assignerId: string;
  commentCount: number;
  isCompleted: boolean;
  content: string;
  description: string;
  due?: Due;
  duration?: string;
  id: string;
  labels: string[];
  order: number;
  priority: number;
  projectId: string;
  sectionId?: string;
  parentId?: string;
  url: string;
}

export function todoItemDeserializer(item: any): TodoItem {
  return {
    creatorId: item["creator_id"],
    createdAt: item["created_at"],
    assigneeId: item["assignee_id"],
    assignerId: item["assigner_id"],
    commentCount: item["comment_count"],
    isCompleted: item["is_completed"],
    content: item["content"],
    description: item["description"],
    due: !item["due"] ? item["due"] : dueDeserializer(item["due"]),
    duration: item["duration"],
    id: item["id"],
    labels: item["labels"].map((p: any) => {
      return p;
    }),
    order: item["order"],
    priority: item["priority"],
    projectId: item["project_id"],
    sectionId: item["section_id"],
    parentId: item["parent_id"],
    url: item["url"],
  };
}

/** model interface Due */
export interface Due {
  date: string;
  isRecurring: boolean;
  datetime?: string;
  string: string;
  timezone?: string;
}

export function dueSerializer(item: Due): any {
  return {
    date: item["date"],
    is_recurring: item["isRecurring"],
    datetime: item["datetime"],
    string: item["string"],
    timezone: item["timezone"],
  };
}

export function dueDeserializer(item: any): Due {
  return {
    date: item["date"],
    isRecurring: item["is_recurring"],
    datetime: item["datetime"],
    string: item["string"],
    timezone: item["timezone"],
  };
}

/** model interface CreateTodoItemRequest */
export interface CreateTodoItemRequest {
  content: string;
  description?: string;
  due?: Due;
  labels?: string[];
  priority?: number;
  parentId?: string;
  order?: number;
  projectId?: string;
  sectionId?: string;
  assigneeId?: string;
}

export function createTodoItemRequestSerializer(
  item: CreateTodoItemRequest,
): any {
  return {
    content: item["content"],
    description: item["description"],
    due: !item["due"] ? item["due"] : dueSerializer(item["due"]),
    labels: !item["labels"]
      ? item["labels"]
      : item["labels"].map((p: any) => {
          return p;
        }),
    priority: item["priority"],
    parent_id: item["parentId"],
    order: item["order"],
    project_id: item["projectId"],
    section_id: item["sectionId"],
    assignee_id: item["assigneeId"],
  };
}

/** model interface UpdateTodoItemRequest */
export interface UpdateTodoItemRequest {
  content?: string;
  description?: string;
  due?: Due;
  labels?: string[];
  priority?: number;
  parentId?: string;
  order?: number;
  projectId?: string;
  sectionId?: string;
  assigneeId?: string;
}

export function updateTodoItemRequestSerializer(
  item: UpdateTodoItemRequest,
): any {
  return {
    content: item["content"],
    description: item["description"],
    due: !item["due"] ? item["due"] : dueSerializer(item["due"]),
    labels: !item["labels"]
      ? item["labels"]
      : item["labels"].map((p: any) => {
          return p;
        }),
    priority: item["priority"],
    parent_id: item["parentId"],
    order: item["order"],
    project_id: item["projectId"],
    section_id: item["sectionId"],
    assignee_id: item["assigneeId"],
  };
}

/** model interface Section */
export interface Section {
  id: string;
  projectId: string;
  order: number;
  name: string;
}

export function sectionDeserializer(item: any): Section {
  return {
    id: item["id"],
    projectId: item["project_id"],
    order: item["order"],
    name: item["name"],
  };
}

/** model interface CreateSectionRequest */
export interface CreateSectionRequest {
  name: string;
  projectId: string;
  order?: number;
}

export function createSectionRequestSerializer(
  item: CreateSectionRequest,
): any {
  return {
    name: item["name"],
    project_id: item["projectId"],
    order: item["order"],
  };
}

/** model interface UpdateSectionRequest */
export interface UpdateSectionRequest {
  name?: string;
  order?: number;
}

export function updateSectionRequestSerializer(
  item: UpdateSectionRequest,
): any {
  return { name: item["name"], order: item["order"] };
}

/** model interface Project */
export interface Project {
  id: string;
  name: string;
  commentCount: number;
  order: number;
  color: string;
  isShared: boolean;
  isFavorite: boolean;
  parentId?: string;
  isInboxProject: boolean;
  isTeamInbox: boolean;
  viewStyle: string;
  url: string;
}

export function projectDeserializer(item: any): Project {
  return {
    id: item["id"],
    name: item["name"],
    commentCount: item["comment_count"],
    order: item["order"],
    color: item["color"],
    isShared: item["is_shared"],
    isFavorite: item["is_favorite"],
    parentId: item["parent_id"],
    isInboxProject: item["is_inbox_project"],
    isTeamInbox: item["is_team_inbox"],
    viewStyle: item["view_style"],
    url: item["url"],
  };
}

/** model interface CreateProjectRequest */
export interface CreateProjectRequest {
  name: string;
  color?: string;
  parentId?: string;
  order?: number;
  isFavorite?: boolean;
}

export function createProjectRequestSerializer(
  item: CreateProjectRequest,
): any {
  return {
    name: item["name"],
    color: item["color"],
    parent_id: item["parentId"],
    order: item["order"],
    is_favorite: item["isFavorite"],
  };
}

/** model interface UpdateProjectRequest */
export interface UpdateProjectRequest {
  name?: string;
  color?: string;
  parentId?: string;
  order?: number;
  isFavorite?: boolean;
}

export function updateProjectRequestSerializer(
  item: UpdateProjectRequest,
): any {
  return {
    name: item["name"],
    color: item["color"],
    parent_id: item["parentId"],
    order: item["order"],
    is_favorite: item["isFavorite"],
  };
}

/** model interface Collaborator */
export interface Collaborator {
  id: string;
  name: string;
  email: string;
}

export function collaboratorDeserializer(item: any): Collaborator {
  return {
    id: item["id"],
    name: item["name"],
    email: item["email"],
  };
}

export function projectArrayDeserializer(result: Array<Project>): any[] {
  return result.map((item) => {
    return projectDeserializer(item);
  });
}

export function collaboratorArrayDeserializer(
  result: Array<Collaborator>,
): any[] {
  return result.map((item) => {
    return collaboratorDeserializer(item);
  });
}

export function sectionArrayDeserializer(result: Array<Section>): any[] {
  return result.map((item) => {
    return sectionDeserializer(item);
  });
}

export function todoItemArrayDeserializer(result: Array<TodoItem>): any[] {
  return result.map((item) => {
    return todoItemDeserializer(item);
  });
}

export function commentArrayDeserializer(result: Array<Comment>): any[] {
  return result.map((item) => {
    return commentDeserializer(item);
  });
}

export function labelArrayDeserializer(result: Array<Label>): any[] {
  return result.map((item) => {
    return labelDeserializer(item);
  });
}
