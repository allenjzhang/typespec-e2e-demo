import { Page, TodoAttachment, FileAttachmentMultipartRequest } from "../../../models/models.js";
import { parse } from "uri-template";
import { jsonPageToApplicationTransform, jsonTodoAttachmentToTransportTransform } from "../../../models/internal/serializers.js";
import { AttachmentsClientContext } from "./attachmentsClientContext.js";
import { OperationOptions } from "../../../helpers/interfaces.js";
import { createFilePartDescriptor } from "../../../helpers/multipart-helpers.js";
import { createRestError } from "../../../helpers/error.js";

export interface ListOptions extends OperationOptions {

}export async function list(
  client: AttachmentsClientContext,
  itemId: number,
  options?: ListOptions,): Promise<Page> {
  const path = parse("/items/{itemId}/attachments").expand({
    "itemId": itemId
  });
  const httpRequestOptions = {
    headers: {

    },
  };
  const response = await client.pathUnchecked(path).get(httpRequestOptions)

  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  ;if (+response.status === 200 && response.headers["content-type"]?.includes("application/json")) {
    return jsonPageToApplicationTransform(response.body)!;
  }throw createRestError(response);
};
export interface CreateJsonAttachmentOptions extends OperationOptions {
  contentType?: "application/json"
}export async function createJsonAttachment(
  client: AttachmentsClientContext,
  itemId: number,
  contents: TodoAttachment,
  options?: CreateJsonAttachmentOptions,): Promise<void> {
  const path = parse("/items/{itemId}/attachments").expand({
    "itemId": itemId
  });
  const httpRequestOptions = {
    headers: {
      "content-type": options?.contentType ?? "application/json"
    },body: jsonTodoAttachmentToTransportTransform(contents),
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions)

  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  ;if (+response.status === 204 && !response.body) {
    return;
  }throw createRestError(response);
};
export interface CreateFileAttachmentOptions extends OperationOptions {
  contentType?: "multipart/form-data"
}export async function createFileAttachment(
  client: AttachmentsClientContext,
  itemId: number,
  body: FileAttachmentMultipartRequest,
  options?: CreateFileAttachmentOptions,): Promise<void> {
  const path = parse("/items/{itemId}/attachments").expand({
    "itemId": itemId
  });
  const httpRequestOptions = {
    headers: {
      "content-type": options?.contentType ?? "multipart/form-data"
    },body: [createFilePartDescriptor("contents", body.contents)],
  };
  const response = await client.pathUnchecked(path).post(httpRequestOptions)

  if (typeof options?.operationOptions?.onResponse === "function") {
    options?.operationOptions?.onResponse(response);
  }
  ;if (+response.status === 204 && !response.body) {
    return;
  }throw createRestError(response);
};