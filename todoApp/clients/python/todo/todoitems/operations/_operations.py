# coding=utf-8

from io import IOBase
import json
import sys
from typing import Any, Callable, Dict, IO, Iterable, List, Optional, TypeVar, Union, overload

from corehttp.exceptions import (
    ClientAuthenticationError,
    HttpResponseError,
    ResourceExistsError,
    ResourceNotFoundError,
    ResourceNotModifiedError,
    StreamClosedError,
    StreamConsumedError,
    map_error,
)
from corehttp.paging import ItemPaged
from corehttp.rest import HttpRequest, HttpResponse
from corehttp.runtime.pipeline import PipelineResponse
from corehttp.utils import case_insensitive_dict

from .. import models as _models1
from ... import _model_base, models as _models2
from ..._model_base import SdkJSONEncoder, _deserialize, _failsafe_deserialize
from ..._serialization import Serializer
from ..._vendor import prepare_multipart_form_data
from ..attachments.operations._operations import TodoItemsAttachmentsOperations

if sys.version_info >= (3, 9):
    from collections.abc import MutableMapping
else:
    from typing import MutableMapping  # type: ignore
JSON = MutableMapping[str, Any]  # pylint: disable=unsubscriptable-object
_Unset: Any = object()
T = TypeVar("T")
ClsType = Optional[Callable[[PipelineResponse[HttpRequest, HttpResponse], T, Dict[str, Any]], Any]]

_SERIALIZER = Serializer()
_SERIALIZER.client_side_validation = False


def build_todo_items_list_request(
    *, limit: Optional[int] = None, offset: Optional[int] = None, **kwargs: Any
) -> HttpRequest:
    _headers = case_insensitive_dict(kwargs.pop("headers", {}) or {})
    _params = case_insensitive_dict(kwargs.pop("params", {}) or {})

    accept = _headers.pop("Accept", "application/json")

    # Construct URL
    _url = "/items"

    # Construct parameters
    if limit is not None:
        _params["limit"] = _SERIALIZER.query("limit", limit, "int")
    if offset is not None:
        _params["offset"] = _SERIALIZER.query("offset", offset, "int")

    # Construct headers
    _headers["Accept"] = _SERIALIZER.header("accept", accept, "str")

    return HttpRequest(method="GET", url=_url, params=_params, headers=_headers, **kwargs)


def build_todo_items_create_json_request(**kwargs: Any) -> HttpRequest:
    _headers = case_insensitive_dict(kwargs.pop("headers", {}) or {})

    content_type: Optional[str] = kwargs.pop("content_type", _headers.pop("content-type", None))
    accept = _headers.pop("Accept", "application/json")

    # Construct URL
    _url = "/items"

    # Construct headers
    if content_type is not None:
        _headers["content-type"] = _SERIALIZER.header("content_type", content_type, "str")
    _headers["Accept"] = _SERIALIZER.header("accept", accept, "str")

    return HttpRequest(method="POST", url=_url, headers=_headers, **kwargs)


def build_todo_items_create_form_request(**kwargs: Any) -> HttpRequest:
    _headers = case_insensitive_dict(kwargs.pop("headers", {}) or {})

    accept = _headers.pop("Accept", "application/json")

    # Construct URL
    _url = "/items"

    # Construct headers
    _headers["Accept"] = _SERIALIZER.header("accept", accept, "str")

    return HttpRequest(method="POST", url=_url, headers=_headers, **kwargs)


def build_todo_items_get_request(id: int, **kwargs: Any) -> HttpRequest:
    _headers = case_insensitive_dict(kwargs.pop("headers", {}) or {})

    accept = _headers.pop("Accept", "application/json")

    # Construct URL
    _url = "/items/{id}"
    path_format_arguments = {
        "id": _SERIALIZER.url("id", id, "int"),
    }

    _url: str = _url.format(**path_format_arguments)  # type: ignore

    # Construct headers
    _headers["Accept"] = _SERIALIZER.header("accept", accept, "str")

    return HttpRequest(method="GET", url=_url, headers=_headers, **kwargs)


def build_todo_items_update_request(id: int, **kwargs: Any) -> HttpRequest:
    _headers = case_insensitive_dict(kwargs.pop("headers", {}) or {})

    content_type: Optional[str] = kwargs.pop("content_type", _headers.pop("content-type", None))
    accept = _headers.pop("Accept", "application/json")

    # Construct URL
    _url = "/items/{id}"
    path_format_arguments = {
        "id": _SERIALIZER.url("id", id, "int"),
    }

    _url: str = _url.format(**path_format_arguments)  # type: ignore

    # Construct headers
    if content_type is not None:
        _headers["content-type"] = _SERIALIZER.header("content_type", content_type, "str")
    _headers["Accept"] = _SERIALIZER.header("accept", accept, "str")

    return HttpRequest(method="PATCH", url=_url, headers=_headers, **kwargs)


def build_todo_items_delete_request(id: int, **kwargs: Any) -> HttpRequest:
    _headers = case_insensitive_dict(kwargs.pop("headers", {}) or {})

    accept = _headers.pop("Accept", "application/json")

    # Construct URL
    _url = "/items/{id}"
    path_format_arguments = {
        "id": _SERIALIZER.url("id", id, "int"),
    }

    _url: str = _url.format(**path_format_arguments)  # type: ignore

    # Construct headers
    _headers["Accept"] = _SERIALIZER.header("accept", accept, "str")

    return HttpRequest(method="DELETE", url=_url, headers=_headers, **kwargs)


class TodoItemsOperations:
    """
    .. warning::
        **DO NOT** instantiate this class directly.

        Instead, you should access the following operations through
        :class:`~todo.TodoClient`'s
        :attr:`todo_items` attribute.
    """

    def __init__(self, *args, **kwargs):
        input_args = list(args)
        self._client = input_args.pop(0) if input_args else kwargs.pop("client")
        self._config = input_args.pop(0) if input_args else kwargs.pop("config")
        self._serialize = input_args.pop(0) if input_args else kwargs.pop("serializer")
        self._deserialize = input_args.pop(0) if input_args else kwargs.pop("deserializer")

        self.attachments = TodoItemsAttachmentsOperations(
            self._client, self._config, self._serialize, self._deserialize
        )

    def list(
        self, *, limit: Optional[int] = None, offset: Optional[int] = None, **kwargs: Any
    ) -> Iterable["_models2.TodoItem"]:
        """list.

        :keyword limit: The limit to the number of items. Default value is None.
        :paramtype limit: int
        :keyword offset: The offset to start paginating at. Default value is None.
        :paramtype offset: int
        :return: An iterator like instance of TodoItem
        :rtype: ~corehttp.paging.ItemPaged[~todo.models.TodoItem]
        :raises ~corehttp.exceptions.HttpResponseError:
        """
        _headers = kwargs.pop("headers", {}) or {}
        _params = kwargs.pop("params", {}) or {}

        cls: ClsType[List[_models2.TodoItem]] = kwargs.pop("cls", None)

        error_map: MutableMapping = {
            304: ResourceNotModifiedError,
        }
        error_map.update(kwargs.pop("error_map", {}) or {})

        def prepare_request(next_link=None):
            if not next_link:

                _request = build_todo_items_list_request(
                    limit=limit,
                    offset=offset,
                    headers=_headers,
                    params=_params,
                )
                path_format_arguments = {
                    "endpoint": self._serialize.url(
                        "self._config.endpoint", self._config.endpoint, "str", skip_quote=True
                    ),
                }
                _request.url = self._client.format_url(_request.url, **path_format_arguments)

            else:
                _request = HttpRequest("GET", next_link)
                path_format_arguments = {
                    "endpoint": self._serialize.url(
                        "self._config.endpoint", self._config.endpoint, "str", skip_quote=True
                    ),
                }
                _request.url = self._client.format_url(_request.url, **path_format_arguments)

            return _request

        def extract_data(pipeline_response):
            deserialized = pipeline_response.http_response.json()
            list_of_elem = _deserialize(List[_models2.TodoItem], deserialized["items"])
            if cls:
                list_of_elem = cls(list_of_elem)  # type: ignore
            return deserialized.get("nextLink") or None, iter(list_of_elem)

        def get_next(next_link=None):
            _request = prepare_request(next_link)

            _stream = False
            pipeline_response: PipelineResponse = self._client.pipeline.run(_request, stream=_stream, **kwargs)
            response = pipeline_response.http_response

            if response.status_code not in [200]:
                map_error(status_code=response.status_code, response=response, error_map=error_map)
                error = None
                if 400 <= response.status_code <= 499:
                    error = _failsafe_deserialize(_models2.Standard4XXResponse, response.json())
                elif 500 <= response.status_code <= 599:
                    error = _failsafe_deserialize(_models2.Standard5XXResponse, response.json())
                raise HttpResponseError(response=response, model=error)

            return pipeline_response

        return ItemPaged(get_next, extract_data)

    @overload
    def create_json(
        self, body: JSON, *, content_type: str = "application/json", **kwargs: Any
    ) -> _models2.CreateJsonResponse:
        """create_json.

        :param body: Required.
        :type body: JSON
        :keyword content_type: Body Parameter content-type. Content type parameter for JSON body.
         Default value is "application/json".
        :paramtype content_type: str
        :return: CreateJsonResponse. The CreateJsonResponse is compatible with MutableMapping
        :rtype: ~todo.models.CreateJsonResponse
        :raises ~corehttp.exceptions.HttpResponseError:
        """

    @overload
    def create_json(
        self,
        *,
        item: _models2.TodoItem,
        content_type: str = "application/json",
        attachments: Optional[List[_models2.TodoAttachment]] = None,
        **kwargs: Any
    ) -> _models2.CreateJsonResponse:
        """create_json.

        :keyword item: Required.
        :paramtype item: ~todo.models.TodoItem
        :keyword content_type: Body Parameter content-type. Content type parameter for JSON body.
         Default value is "application/json".
        :paramtype content_type: str
        :keyword attachments: Default value is None.
        :paramtype attachments: list[~todo.models.TodoAttachment]
        :return: CreateJsonResponse. The CreateJsonResponse is compatible with MutableMapping
        :rtype: ~todo.models.CreateJsonResponse
        :raises ~corehttp.exceptions.HttpResponseError:
        """

    @overload
    def create_json(
        self, body: IO[bytes], *, content_type: str = "application/json", **kwargs: Any
    ) -> _models2.CreateJsonResponse:
        """create_json.

        :param body: Required.
        :type body: IO[bytes]
        :keyword content_type: Body Parameter content-type. Content type parameter for binary body.
         Default value is "application/json".
        :paramtype content_type: str
        :return: CreateJsonResponse. The CreateJsonResponse is compatible with MutableMapping
        :rtype: ~todo.models.CreateJsonResponse
        :raises ~corehttp.exceptions.HttpResponseError:
        """

    def create_json(
        self,
        body: Union[JSON, IO[bytes]] = _Unset,
        *,
        item: _models2.TodoItem = _Unset,
        attachments: Optional[List[_models2.TodoAttachment]] = None,
        **kwargs: Any
    ) -> _models2.CreateJsonResponse:
        """create_json.

        :param body: Is either a JSON type or a IO[bytes] type. Required.
        :type body: JSON or IO[bytes]
        :keyword item: Required.
        :paramtype item: ~todo.models.TodoItem
        :keyword attachments: Default value is None.
        :paramtype attachments: list[~todo.models.TodoAttachment]
        :return: CreateJsonResponse. The CreateJsonResponse is compatible with MutableMapping
        :rtype: ~todo.models.CreateJsonResponse
        :raises ~corehttp.exceptions.HttpResponseError:
        """
        error_map: MutableMapping = {
            304: ResourceNotModifiedError,
        }
        error_map.update(kwargs.pop("error_map", {}) or {})

        _headers = case_insensitive_dict(kwargs.pop("headers", {}) or {})
        _params = kwargs.pop("params", {}) or {}

        content_type: Optional[str] = kwargs.pop("content_type", _headers.pop("content-type", None))
        cls: ClsType[_models2.CreateJsonResponse] = kwargs.pop("cls", None)

        if body is _Unset:
            if item is _Unset:
                raise TypeError("missing required argument: item")
            body = {"attachments": attachments, "item": item}
            body = {k: v for k, v in body.items() if v is not None}
        content_type = content_type or "application/json"
        _content = None
        if isinstance(body, (IOBase, bytes)):
            _content = body
        else:
            _content = json.dumps(body, cls=SdkJSONEncoder, exclude_readonly=True)  # type: ignore

        _request = build_todo_items_create_json_request(
            content_type=content_type,
            content=_content,
            headers=_headers,
            params=_params,
        )
        path_format_arguments = {
            "endpoint": self._serialize.url("self._config.endpoint", self._config.endpoint, "str", skip_quote=True),
        }
        _request.url = self._client.format_url(_request.url, **path_format_arguments)

        _stream = kwargs.pop("stream", False)
        pipeline_response: PipelineResponse = self._client.pipeline.run(_request, stream=_stream, **kwargs)

        response = pipeline_response.http_response

        if response.status_code not in [200]:
            if _stream:
                try:
                    response.read()  # Load the body in memory and close the socket
                except (StreamConsumedError, StreamClosedError):
                    pass
            map_error(status_code=response.status_code, response=response, error_map=error_map)
            error = None
            if response.status_code == 422:
                error = _failsafe_deserialize(_models1.InvalidTodoItem, response.json())
            elif 400 <= response.status_code <= 499:
                error = _failsafe_deserialize(_models2.Standard4XXResponse, response.json())
            elif 500 <= response.status_code <= 599:
                error = _failsafe_deserialize(_models2.Standard5XXResponse, response.json())
            raise HttpResponseError(response=response, model=error)

        if _stream:
            deserialized = response.iter_bytes()
        else:
            deserialized = _deserialize(_models2.CreateJsonResponse, response.json())

        if cls:
            return cls(pipeline_response, deserialized, {})  # type: ignore

        return deserialized  # type: ignore

    @overload
    def create_form(self, body: _models2.ToDoItemMultipartRequest, **kwargs: Any) -> _models2.CreateFormResponse:
        """create_form.

        :param body: Required.
        :type body: ~todo.models.ToDoItemMultipartRequest
        :return: CreateFormResponse. The CreateFormResponse is compatible with MutableMapping
        :rtype: ~todo.models.CreateFormResponse
        :raises ~corehttp.exceptions.HttpResponseError:
        """

    @overload
    def create_form(self, body: JSON, **kwargs: Any) -> _models2.CreateFormResponse:
        """create_form.

        :param body: Required.
        :type body: JSON
        :return: CreateFormResponse. The CreateFormResponse is compatible with MutableMapping
        :rtype: ~todo.models.CreateFormResponse
        :raises ~corehttp.exceptions.HttpResponseError:
        """

    def create_form(
        self, body: Union[_models2.ToDoItemMultipartRequest, JSON], **kwargs: Any
    ) -> _models2.CreateFormResponse:
        """create_form.

        :param body: Is either a ToDoItemMultipartRequest type or a JSON type. Required.
        :type body: ~todo.models.ToDoItemMultipartRequest or JSON
        :return: CreateFormResponse. The CreateFormResponse is compatible with MutableMapping
        :rtype: ~todo.models.CreateFormResponse
        :raises ~corehttp.exceptions.HttpResponseError:
        """
        error_map: MutableMapping = {
            304: ResourceNotModifiedError,
        }
        error_map.update(kwargs.pop("error_map", {}) or {})

        _headers = kwargs.pop("headers", {}) or {}
        _params = kwargs.pop("params", {}) or {}

        cls: ClsType[_models2.CreateFormResponse] = kwargs.pop("cls", None)

        _body = body.as_dict() if isinstance(body, _model_base.Model) else body
        _file_fields: List[str] = ["attachments"]
        _data_fields: List[str] = ["item"]
        _files, _data = prepare_multipart_form_data(_body, _file_fields, _data_fields)

        _request = build_todo_items_create_form_request(
            files=_files,
            data=_data,
            headers=_headers,
            params=_params,
        )
        path_format_arguments = {
            "endpoint": self._serialize.url("self._config.endpoint", self._config.endpoint, "str", skip_quote=True),
        }
        _request.url = self._client.format_url(_request.url, **path_format_arguments)

        _stream = kwargs.pop("stream", False)
        pipeline_response: PipelineResponse = self._client.pipeline.run(_request, stream=_stream, **kwargs)

        response = pipeline_response.http_response

        if response.status_code not in [200]:
            if _stream:
                try:
                    response.read()  # Load the body in memory and close the socket
                except (StreamConsumedError, StreamClosedError):
                    pass
            map_error(status_code=response.status_code, response=response, error_map=error_map)
            error = None
            if response.status_code == 422:
                error = _failsafe_deserialize(_models1.InvalidTodoItem, response.json())
            elif 400 <= response.status_code <= 499:
                error = _failsafe_deserialize(_models2.Standard4XXResponse, response.json())
            elif 500 <= response.status_code <= 599:
                error = _failsafe_deserialize(_models2.Standard5XXResponse, response.json())
            raise HttpResponseError(response=response, model=error)

        if _stream:
            deserialized = response.iter_bytes()
        else:
            deserialized = _deserialize(_models2.CreateFormResponse, response.json())

        if cls:
            return cls(pipeline_response, deserialized, {})  # type: ignore

        return deserialized  # type: ignore

    def get(self, id: int, **kwargs: Any) -> _models2.GetResponse:
        """get.

        :param id: Required.
        :type id: int
        :return: GetResponse. The GetResponse is compatible with MutableMapping
        :rtype: ~todo.models.GetResponse
        :raises ~corehttp.exceptions.HttpResponseError:
        """
        error_map: MutableMapping = {
            401: ClientAuthenticationError,
            409: ResourceExistsError,
            304: ResourceNotModifiedError,
        }
        error_map.update(kwargs.pop("error_map", {}) or {})

        _headers = kwargs.pop("headers", {}) or {}
        _params = kwargs.pop("params", {}) or {}

        cls: ClsType[_models2.GetResponse] = kwargs.pop("cls", None)

        _request = build_todo_items_get_request(
            id=id,
            headers=_headers,
            params=_params,
        )
        path_format_arguments = {
            "endpoint": self._serialize.url("self._config.endpoint", self._config.endpoint, "str", skip_quote=True),
        }
        _request.url = self._client.format_url(_request.url, **path_format_arguments)

        _stream = kwargs.pop("stream", False)
        pipeline_response: PipelineResponse = self._client.pipeline.run(_request, stream=_stream, **kwargs)

        response = pipeline_response.http_response

        if response.status_code not in [200]:
            if _stream:
                try:
                    response.read()  # Load the body in memory and close the socket
                except (StreamConsumedError, StreamClosedError):
                    pass
            map_error(status_code=response.status_code, response=response, error_map=error_map)
            error = None
            if response.status_code == 404:
                error = _failsafe_deserialize(_models1.NotFoundErrorResponse, response.json())
                raise ResourceNotFoundError(response=response, model=error)
            raise HttpResponseError(response=response, model=error)

        if _stream:
            deserialized = response.iter_bytes()
        else:
            deserialized = _deserialize(_models2.GetResponse, response.json())

        if cls:
            return cls(pipeline_response, deserialized, {})  # type: ignore

        return deserialized  # type: ignore

    @overload
    def update(
        self,
        id: int,
        patch: _models1.TodoItemPatch,
        *,
        content_type: str = "application/merge-patch+json",
        **kwargs: Any
    ) -> _models2.UpdateResponse:
        """update.

        :param id: Required.
        :type id: int
        :param patch: Required.
        :type patch: ~todo.models.TodoItemPatch
        :keyword content_type: Body Parameter content-type. Content type parameter for JSON body.
         Default value is "application/merge-patch+json".
        :paramtype content_type: str
        :return: UpdateResponse. The UpdateResponse is compatible with MutableMapping
        :rtype: ~todo.models.UpdateResponse
        :raises ~corehttp.exceptions.HttpResponseError:
        """

    @overload
    def update(
        self, id: int, patch: JSON, *, content_type: str = "application/merge-patch+json", **kwargs: Any
    ) -> _models2.UpdateResponse:
        """update.

        :param id: Required.
        :type id: int
        :param patch: Required.
        :type patch: JSON
        :keyword content_type: Body Parameter content-type. Content type parameter for JSON body.
         Default value is "application/merge-patch+json".
        :paramtype content_type: str
        :return: UpdateResponse. The UpdateResponse is compatible with MutableMapping
        :rtype: ~todo.models.UpdateResponse
        :raises ~corehttp.exceptions.HttpResponseError:
        """

    @overload
    def update(
        self, id: int, patch: IO[bytes], *, content_type: str = "application/merge-patch+json", **kwargs: Any
    ) -> _models2.UpdateResponse:
        """update.

        :param id: Required.
        :type id: int
        :param patch: Required.
        :type patch: IO[bytes]
        :keyword content_type: Body Parameter content-type. Content type parameter for binary body.
         Default value is "application/merge-patch+json".
        :paramtype content_type: str
        :return: UpdateResponse. The UpdateResponse is compatible with MutableMapping
        :rtype: ~todo.models.UpdateResponse
        :raises ~corehttp.exceptions.HttpResponseError:
        """

    def update(
        self, id: int, patch: Union[_models1.TodoItemPatch, JSON, IO[bytes]], **kwargs: Any
    ) -> _models2.UpdateResponse:
        """update.

        :param id: Required.
        :type id: int
        :param patch: Is one of the following types: TodoItemPatch, JSON, IO[bytes] Required.
        :type patch: ~todo.models.TodoItemPatch or JSON or IO[bytes]
        :return: UpdateResponse. The UpdateResponse is compatible with MutableMapping
        :rtype: ~todo.models.UpdateResponse
        :raises ~corehttp.exceptions.HttpResponseError:
        """
        error_map: MutableMapping = {
            401: ClientAuthenticationError,
            404: ResourceNotFoundError,
            409: ResourceExistsError,
            304: ResourceNotModifiedError,
        }
        error_map.update(kwargs.pop("error_map", {}) or {})

        _headers = case_insensitive_dict(kwargs.pop("headers", {}) or {})
        _params = kwargs.pop("params", {}) or {}

        content_type: Optional[str] = kwargs.pop("content_type", _headers.pop("content-type", None))
        cls: ClsType[_models2.UpdateResponse] = kwargs.pop("cls", None)

        content_type = content_type or "application/merge-patch+json"
        _content = None
        if isinstance(patch, (IOBase, bytes)):
            _content = patch
        else:
            _content = json.dumps(patch, cls=SdkJSONEncoder, exclude_readonly=True)  # type: ignore

        _request = build_todo_items_update_request(
            id=id,
            content_type=content_type,
            content=_content,
            headers=_headers,
            params=_params,
        )
        path_format_arguments = {
            "endpoint": self._serialize.url("self._config.endpoint", self._config.endpoint, "str", skip_quote=True),
        }
        _request.url = self._client.format_url(_request.url, **path_format_arguments)

        _stream = kwargs.pop("stream", False)
        pipeline_response: PipelineResponse = self._client.pipeline.run(_request, stream=_stream, **kwargs)

        response = pipeline_response.http_response

        if response.status_code not in [200]:
            if _stream:
                try:
                    response.read()  # Load the body in memory and close the socket
                except (StreamConsumedError, StreamClosedError):
                    pass
            map_error(status_code=response.status_code, response=response, error_map=error_map)
            raise HttpResponseError(response=response)

        if _stream:
            deserialized = response.iter_bytes()
        else:
            deserialized = _deserialize(_models2.UpdateResponse, response.json())

        if cls:
            return cls(pipeline_response, deserialized, {})  # type: ignore

        return deserialized  # type: ignore

    def delete(self, id: int, **kwargs: Any) -> None:  # pylint: disable=inconsistent-return-statements
        """delete.

        :param id: Required.
        :type id: int
        :return: None
        :rtype: None
        :raises ~corehttp.exceptions.HttpResponseError:
        """
        error_map: MutableMapping = {
            304: ResourceNotModifiedError,
        }
        error_map.update(kwargs.pop("error_map", {}) or {})

        _headers = kwargs.pop("headers", {}) or {}
        _params = kwargs.pop("params", {}) or {}

        cls: ClsType[None] = kwargs.pop("cls", None)

        _request = build_todo_items_delete_request(
            id=id,
            headers=_headers,
            params=_params,
        )
        path_format_arguments = {
            "endpoint": self._serialize.url("self._config.endpoint", self._config.endpoint, "str", skip_quote=True),
        }
        _request.url = self._client.format_url(_request.url, **path_format_arguments)

        _stream = False
        pipeline_response: PipelineResponse = self._client.pipeline.run(_request, stream=_stream, **kwargs)

        response = pipeline_response.http_response

        if response.status_code not in [204]:
            map_error(status_code=response.status_code, response=response, error_map=error_map)
            error = None
            if response.status_code == 404:
                error = _failsafe_deserialize(_models1.NotFoundErrorResponse, response.json())
                raise ResourceNotFoundError(response=response, model=error)
            elif 400 <= response.status_code <= 499:
                error = _failsafe_deserialize(_models2.Standard4XXResponse, response.json())
            elif 500 <= response.status_code <= 599:
                error = _failsafe_deserialize(_models2.Standard5XXResponse, response.json())
            raise HttpResponseError(response=response, model=error)

        if cls:
            return cls(pipeline_response, None, {})  # type: ignore
