// Generated by Microsoft TypeSpec

import {
  WidgetUpdate,
  ResourceDeletedResponse,
  WidgetResourceCreatedResponse,
  WidgetCreate,
  WidgetCollectionWithNextLink,
} from "./typespec/rest/resource.js";

export interface Widget {
  id: string;

  weight: number;

  color: "red" | "blue";
}

export interface Error {
  code: number;

  message: string;
}

export interface WidgetService<Context = unknown> {
  /**
   * Gets an instance of the resource.
   */
  get(ctx: Context, id: string): Promise<Widget | Error>;

  /**
   * Updates an existing instance of the resource.
   */
  update(
    ctx: Context,
    id: string,
    properties: WidgetUpdate,
  ): Promise<Widget | Error>;

  /**
   * Deletes an existing instance of the resource.
   */
  delete(ctx: Context, id: string): Promise<ResourceDeletedResponse | Error>;

  /**
   * Creates a new instance of the resource.
   */
  create(
    ctx: Context,
    resource: WidgetCreate,
  ): Promise<Widget | WidgetResourceCreatedResponse | Error>;

  /**
   * Lists all instances of the resource.
   */
  list(ctx: Context): Promise<WidgetCollectionWithNextLink | Error>;
}
