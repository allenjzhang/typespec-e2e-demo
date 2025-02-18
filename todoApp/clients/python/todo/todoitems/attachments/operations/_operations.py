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
    map_error,
)
from corehttp.paging import ItemPaged
from corehttp.rest import HttpRequest, HttpResponse
from corehttp.runtime import PipelineClient
from corehttp.runtime.pipeline import PipelineResponse
from corehttp.utils import case_insensitive_dict

from ... import models as _models2
from .... import _model_base, models as _models3
from ...._configuration import TodoClientConfiguration
from ...._model_base import SdkJSONEncoder, _deserialize, _failsafe_deserialize
from ...._serialization import Deserializer, Serializer
from ...._vendor import prepare_multipart_form_data

if sys.version_info >= (3, 9):
    from collections.abc import MutableMapping
else:
    from typing import MutableMapping  # type: ignore
JSON = MutableMapping[str, Any]  # pylint: disable=unsubscriptable-object
T = TypeVar("T")
ClsType = Optional[Callable[[PipelineResponse[HttpRequest, HttpResponse], T, Dict[str, Any]], Any]]

_SERIALIZER = Serializer()
_SERIALIZER.client_side_validation = False


def build_todo_items_attachments_list_request(  # pylint: disable=name-too-long
    item_id: int, **kwargs: Any
) -> HttpRequest:
    _headers = case_insensitive_dict(kwargs.pop("headers", {}) or {})

    accept = _headers.pop("Accept", "application/json")

    # Construct URL
    _url = "/items/{itemId}/attachments"
    path_format_arguments = {
        "itemId": _SERIALIZER.url("item_id", item_id, "int"),
    }

    _url: str = _url.format(**path_format_arguments)  # type: ignore

    # Construct headers
    _headers["Accept"] = _SERIALIZER.header("accept", accept, "str")

    return HttpRequest(method="GET", url=_url, headers=_headers, **kwargs)


def build_todo_items_attachments_create_json_attachment_request(  # pylint: disable=name-too-long
    item_id: int, **kwargs: Any
) -> HttpRequest:
    _headers = case_insensitive_dict(kwargs.pop("headers", {}) or {})

    content_type: Optional[str] = kwargs.pop("content_type", _headers.pop("content-type", None))
    accept = _headers.pop("Accept", "application/json")

    # Construct URL
    _url = "/items/{itemId}/attachments"
    path_format_arguments = {
        "itemId": _SERIALIZER.url("item_id", item_id, "int"),
    }

    _url: str = _url.format(**path_format_arguments)  # type: ignore

    # Construct headers
    if content_type is not None:
        _headers["content-type"] = _SERIALIZER.header("content_type", content_type, "str")
    _headers["Accept"] = _SERIALIZER.header("accept", accept, "str")

    return HttpRequest(method="POST", url=_url, headers=_headers, **kwargs)


def build_todo_items_attachments_create_file_attachment_request(  # pylint: disable=name-too-long
    item_id: int, **kwargs: Any
) -> HttpRequest:
    _headers = case_insensitive_dict(kwargs.pop("headers", {}) or {})

    accept = _headers.pop("Accept", "application/json")

    # Construct URL
    _url = "/items/{itemId}/attachments"
    path_format_arguments = {
        "itemId": _SERIALIZER.url("item_id", item_id, "int"),
    }

    _url: str = _url.format(**path_format_arguments)  # type: ignore

    # Construct headers
    _headers["Accept"] = _SERIALIZER.header("accept", accept, "str")

    return HttpRequest(method="POST", url=_url, headers=_headers, **kwargs)


class TodoItemsAttachmentsOperations:
    """
    .. warning::
        **DO NOT** instantiate this class directly.

        Instead, you should access the following operations through
        :class:`~todo.TodoClient`'s
        :attr:`attachments` attribute.
    """

    def __init__(self, *args, **kwargs):
        input_args = list(args)
        self._client: PipelineClient = input_args.pop(0) if input_args else kwargs.pop("client")
        self._config: TodoClientConfiguration = input_args.pop(0) if input_args else kwargs.pop("config")
        self._serialize: Serializer = input_args.pop(0) if input_args else kwargs.pop("serializer")
        self._deserialize: Deserializer = input_args.pop(0) if input_args else kwargs.pop("deserializer")

    def list(self, item_id: int, **kwargs: Any) -> Iterable["_models3.TodoAttachment"]:
        """list.

        :param item_id: Required.
        :type item_id: int
        :return: An iterator like instance of TodoAttachment
        :rtype: ~corehttp.paging.ItemPaged[~todo.models.TodoAttachment]
        :raises ~corehttp.exceptions.HttpResponseError:
        """
        _headers = kwargs.pop("headers", {}) or {}
        _params = kwargs.pop("params", {}) or {}

        cls: ClsType[List[_models3.TodoAttachment]] = kwargs.pop("cls", None)

        error_map: MutableMapping = {
            304: ResourceNotModifiedError,
        }
        error_map.update(kwargs.pop("error_map", {}) or {})

        def prepare_request(next_link=None):
            if not next_link:

                _request = build_todo_items_attachments_list_request(
                    item_id=item_id,
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
            list_of_elem = _deserialize(List[_models3.TodoAttachment], deserialized["items"])
            if cls:
                list_of_elem = cls(list_of_elem)  # type: ignore
            return None, iter(list_of_elem)

        def get_next(next_link=None):
            _request = prepare_request(next_link)

            _stream = False
            pipeline_response: PipelineResponse = self._client.pipeline.run(_request, stream=_stream, **kwargs)
            response = pipeline_response.http_response

            if response.status_code not in [200]:
                map_error(status_code=response.status_code, response=response, error_map=error_map)
                error = None
                if response.status_code == 404:
                    error = _failsafe_deserialize(_models2.NotFoundErrorResponse, response.json())
                    raise ResourceNotFoundError(response=response, model=error)
                if 400 <= response.status_code <= 499:
                    error = _failsafe_deserialize(_models3.Standard4XXResponse, response.json())
                elif 500 <= response.status_code <= 599:
                    error = _failsafe_deserialize(_models3.Standard5XXResponse, response.json())
                raise HttpResponseError(response=response, model=error)

            return pipeline_response

        return ItemPaged(get_next, extract_data)

    @overload
    def create_json_attachment(
        self, item_id: int, contents: _models3.TodoAttachment, *, content_type: str = "application/json", **kwargs: Any
    ) -> None:
        """create_json_attachment.

        :param item_id: Required.
        :type item_id: int
        :param contents: Required.
        :type contents: ~todo.models.TodoAttachment
        :keyword content_type: Body Parameter content-type. Content type parameter for JSON body.
         Default value is "application/json".
        :paramtype content_type: str
        :return: None
        :rtype: None
        :raises ~corehttp.exceptions.HttpResponseError:
        """

    @overload
    def create_json_attachment(
        self, item_id: int, contents: JSON, *, content_type: str = "application/json", **kwargs: Any
    ) -> None:
        """create_json_attachment.

        :param item_id: Required.
        :type item_id: int
        :param contents: Required.
        :type contents: JSON
        :keyword content_type: Body Parameter content-type. Content type parameter for JSON body.
         Default value is "application/json".
        :paramtype content_type: str
        :return: None
        :rtype: None
        :raises ~corehttp.exceptions.HttpResponseError:
        """

    @overload
    def create_json_attachment(
        self, item_id: int, contents: IO[bytes], *, content_type: str = "application/json", **kwargs: Any
    ) -> None:
        """create_json_attachment.

        :param item_id: Required.
        :type item_id: int
        :param contents: Required.
        :type contents: IO[bytes]
        :keyword content_type: Body Parameter content-type. Content type parameter for binary body.
         Default value is "application/json".
        :paramtype content_type: str
        :return: None
        :rtype: None
        :raises ~corehttp.exceptions.HttpResponseError:
        """

    def create_json_attachment(  # pylint: disable=inconsistent-return-statements
        self, item_id: int, contents: Union[_models3.TodoAttachment, JSON, IO[bytes]], **kwargs: Any
    ) -> None:
        """create_json_attachment.

        :param item_id: Required.
        :type item_id: int
        :param contents: Is one of the following types: TodoAttachment, JSON, IO[bytes] Required.
        :type contents: ~todo.models.TodoAttachment or JSON or IO[bytes]
        :return: None
        :rtype: None
        :raises ~corehttp.exceptions.HttpResponseError:
        """
        error_map: MutableMapping = {
            304: ResourceNotModifiedError,
        }
        error_map.update(kwargs.pop("error_map", {}) or {})

        _headers = case_insensitive_dict(kwargs.pop("headers", {}) or {})
        _params = kwargs.pop("params", {}) or {}

        content_type: Optional[str] = kwargs.pop("content_type", _headers.pop("content-type", None))
        cls: ClsType[None] = kwargs.pop("cls", None)

        content_type = content_type or "application/json"
        _content = None
        if isinstance(contents, (IOBase, bytes)):
            _content = contents
        else:
            _content = json.dumps(contents, cls=SdkJSONEncoder, exclude_readonly=True)  # type: ignore

        _request = build_todo_items_attachments_create_json_attachment_request(
            item_id=item_id,
            content_type=content_type,
            content=_content,
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
                error = _failsafe_deserialize(_models2.NotFoundErrorResponse, response.json())
                raise ResourceNotFoundError(response=response, model=error)
            if 400 <= response.status_code <= 499:
                error = _failsafe_deserialize(_models3.Standard4XXResponse, response.json())
            elif 500 <= response.status_code <= 599:
                error = _failsafe_deserialize(_models3.Standard5XXResponse, response.json())
            raise HttpResponseError(response=response, model=error)

        if cls:
            return cls(pipeline_response, None, {})  # type: ignore

    @overload
    def create_file_attachment(
        self, item_id: int, body: _models3.FileAttachmentMultipartRequest, **kwargs: Any
    ) -> None:
        """create_file_attachment.

        :param item_id: Required.
        :type item_id: int
        :param body: Required.
        :type body: ~todo.models.FileAttachmentMultipartRequest
        :return: None
        :rtype: None
        :raises ~corehttp.exceptions.HttpResponseError:
        """

    @overload
    def create_file_attachment(self, item_id: int, body: JSON, **kwargs: Any) -> None:
        """create_file_attachment.

        :param item_id: Required.
        :type item_id: int
        :param body: Required.
        :type body: JSON
        :return: None
        :rtype: None
        :raises ~corehttp.exceptions.HttpResponseError:
        """

    def create_file_attachment(  # pylint: disable=inconsistent-return-statements
        self, item_id: int, body: Union[_models3.FileAttachmentMultipartRequest, JSON], **kwargs: Any
    ) -> None:
        """create_file_attachment.

        :param item_id: Required.
        :type item_id: int
        :param body: Is either a FileAttachmentMultipartRequest type or a JSON type. Required.
        :type body: ~todo.models.FileAttachmentMultipartRequest or JSON
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

        _body = body.as_dict() if isinstance(body, _model_base.Model) else body
        _file_fields: List[str] = ["contents"]
        _data_fields: List[str] = []
        _files, _data = prepare_multipart_form_data(_body, _file_fields, _data_fields)

        _request = build_todo_items_attachments_create_file_attachment_request(
            item_id=item_id,
            files=_files,
            data=_data,
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
                error = _failsafe_deserialize(_models2.NotFoundErrorResponse, response.json())
                raise ResourceNotFoundError(response=response, model=error)
            if 400 <= response.status_code <= 499:
                error = _failsafe_deserialize(_models3.Standard4XXResponse, response.json())
            elif 500 <= response.status_code <= 599:
                error = _failsafe_deserialize(_models3.Standard5XXResponse, response.json())
            raise HttpResponseError(response=response, model=error)

        if cls:
            return cls(pipeline_response, None, {})  # type: ignore
