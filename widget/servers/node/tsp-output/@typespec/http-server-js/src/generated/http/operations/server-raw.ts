// Generated by Microsoft TypeSpec

import { HttpContext } from "../../helpers/router.js";

import {
  isHttpResponder as __isHttpResponder_0,
  HTTP_RESPONDER as __httpResponderSymbol_1,
} from "../../helpers/http.js";

import { WidgetService, Widget, Error } from "../../models/all/demo-service.js";

import {
  WidgetUpdate,
  ResourceDeletedResponse,
  WidgetCreate,
  WidgetResourceCreatedResponse,
  WidgetCollectionWithNextLink,
} from "../../models/all/typespec/rest/resource.js";

import { parseHeaderValueParameters } from "../../helpers/header.js";

export async function widget_service_get(
  __ctx_2: HttpContext,
  __operations_4: WidgetService,
  id: string,
): Promise<void> {
  let __result_3: Widget | Error;

  try {
    __result_3 = await __operations_4.get(__ctx_2, id);
  } catch (e) {
    if (__isHttpResponder_0(e)) {
      return e[__httpResponderSymbol_1](__ctx_2);
    } else throw e;
  }

  if ("id" in __result_3) {
    __ctx_2.response.setHeader("content-type", "application/json");
    __ctx_2.response.end(JSON.stringify(__result_3));
  } else if (
    "code" in __result_3 &&
    __result_3.code >= 400 &&
    __result_3.code <= 599
  ) {
    __ctx_2.response.statusCode = __result_3.code;
    delete (__result_3 as any).code;
    __ctx_2.response.setHeader("content-type", "application/json");
    __ctx_2.response.end(JSON.stringify(__result_3));
  }
}

export async function widget_service_update(
  __ctx_6: HttpContext,
  __operations_8: WidgetService,
  id: string,
): Promise<void> {
  const __contentType_11 = parseHeaderValueParameters(
    __ctx_6.request.headers["content-type"] as string | undefined,
  );
  if (__contentType_11?.value !== "application/json") {
    return __ctx_6.errorHandlers.onInvalidRequest(
      __ctx_6,
      "/{id}",
      `unexpected "content-type": '${__contentType_11?.value}', expected '"application/json"'`,
    );
  }

  const __properties_10 = (await new Promise(function parseProperties(
    resolve,
    reject,
  ) {
    const chunks: Array<Buffer> = [];
    __ctx_6.request.on("data", function appendChunk(chunk) {
      chunks.push(chunk);
    });
    __ctx_6.request.on("end", function finalize() {
      try {
        const body = Buffer.concat(chunks).toString();
        resolve(JSON.parse(body));
      } catch {
        __ctx_6.errorHandlers.onInvalidRequest(
          __ctx_6,
          "/{id}",
          "invalid JSON in request body",
        );
        reject();
      }
    });
    __ctx_6.request.on("error", reject);
  })) as WidgetUpdate;

  let __result_7: Widget | Error;

  try {
    __result_7 = await __operations_8.update(__ctx_6, id, __properties_10);
  } catch (e) {
    if (__isHttpResponder_0(e)) {
      return e[__httpResponderSymbol_1](__ctx_6);
    } else throw e;
  }

  if ("id" in __result_7) {
    __ctx_6.response.setHeader("content-type", "application/json");
    __ctx_6.response.end(JSON.stringify(__result_7));
  } else if (
    "code" in __result_7 &&
    __result_7.code >= 400 &&
    __result_7.code <= 599
  ) {
    __ctx_6.response.statusCode = __result_7.code;
    delete (__result_7 as any).code;
    __ctx_6.response.setHeader("content-type", "application/json");
    __ctx_6.response.end(JSON.stringify(__result_7));
  }
}

export async function widget_service_delete(
  __ctx_12: HttpContext,
  __operations_14: WidgetService,
  id: string,
): Promise<void> {
  let __result_13: ResourceDeletedResponse | Error;

  try {
    __result_13 = await __operations_14.delete(__ctx_12, id);
  } catch (e) {
    if (__isHttpResponder_0(e)) {
      return e[__httpResponderSymbol_1](__ctx_12);
    } else throw e;
  }

  if (
    "code" in __result_13 &&
    __result_13.code >= 400 &&
    __result_13.code <= 599
  ) {
    __ctx_12.response.statusCode = __result_13.code;
    delete (__result_13 as any).code;
    __ctx_12.response.setHeader("content-type", "application/json");
    __ctx_12.response.end(JSON.stringify(__result_13));
  } else {
    __ctx_12.response.statusCode = 200;
    __ctx_12.response.end();
  }
}

export async function widget_service_create(
  __ctx_16: HttpContext,
  __operations_18: WidgetService,
): Promise<void> {
  const __contentType_21 = parseHeaderValueParameters(
    __ctx_16.request.headers["content-type"] as string | undefined,
  );
  if (__contentType_21?.value !== "application/json") {
    return __ctx_16.errorHandlers.onInvalidRequest(
      __ctx_16,
      "/",
      `unexpected "content-type": '${__contentType_21?.value}', expected '"application/json"'`,
    );
  }

  const __resource_20 = (await new Promise(function parseResource(
    resolve,
    reject,
  ) {
    const chunks: Array<Buffer> = [];
    __ctx_16.request.on("data", function appendChunk(chunk) {
      chunks.push(chunk);
    });
    __ctx_16.request.on("end", function finalize() {
      try {
        const body = Buffer.concat(chunks).toString();
        resolve(JSON.parse(body));
      } catch {
        __ctx_16.errorHandlers.onInvalidRequest(
          __ctx_16,
          "/",
          "invalid JSON in request body",
        );
        reject();
      }
    });
    __ctx_16.request.on("error", reject);
  })) as WidgetCreate;

  let __result_17: Widget | WidgetResourceCreatedResponse | Error;

  try {
    __result_17 = await __operations_18.create(__ctx_16, __resource_20);
  } catch (e) {
    if (__isHttpResponder_0(e)) {
      return e[__httpResponderSymbol_1](__ctx_16);
    } else throw e;
  }

  if ("id" in __result_17) {
    __ctx_16.response.setHeader("content-type", "application/json");
    __ctx_16.response.end(JSON.stringify(__result_17));
  } else if ("statusCode" in __result_17 && __result_17.statusCode === 201) {
    __ctx_16.response.statusCode = __result_17.statusCode;
    delete (__result_17 as any).statusCode;
    __ctx_16.response.setHeader("content-type", "application/json");
    __ctx_16.response.end(JSON.stringify(__result_17));
  } else if (
    "code" in __result_17 &&
    __result_17.code >= 400 &&
    __result_17.code <= 599
  ) {
    __ctx_16.response.statusCode = __result_17.code;
    delete (__result_17 as any).code;
    __ctx_16.response.setHeader("content-type", "application/json");
    __ctx_16.response.end(JSON.stringify(__result_17));
  }
}

export async function widget_service_list(
  __ctx_22: HttpContext,
  __operations_24: WidgetService,
): Promise<void> {
  let __result_23: WidgetCollectionWithNextLink | Error;

  try {
    __result_23 = await __operations_24.list(__ctx_22);
  } catch (e) {
    if (__isHttpResponder_0(e)) {
      return e[__httpResponderSymbol_1](__ctx_22);
    } else throw e;
  }

  if ("value" in __result_23) {
    __ctx_22.response.setHeader("content-type", "application/json");
    __ctx_22.response.end(JSON.stringify(__result_23));
  } else if (
    "code" in __result_23 &&
    __result_23.code >= 400 &&
    __result_23.code <= 599
  ) {
    __ctx_22.response.statusCode = __result_23.code;
    delete (__result_23 as any).code;
    __ctx_22.response.setHeader("content-type", "application/json");
    __ctx_22.response.end(JSON.stringify(__result_23));
  }
}
