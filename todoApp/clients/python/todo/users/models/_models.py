# coding=utf-8


from typing import Any, Literal, Mapping, overload

from ..._model_base import rest_field
from ...models import ApiError


class InvalidUserResponse(ApiError):
    """The user is invalid (e.g. forgot to enter email address).

    Readonly variables are only populated by the server, and will be ignored when sending a request.

    All required parameters must be populated in order to send to server.

    :ivar message: A human readable message. Required.
    :vartype message: str
    :ivar code: Required. Default value is "invalid-user".
    :vartype code: str
    """

    code: Literal["invalid-user"] = rest_field(visibility=["read", "create", "update", "delete", "query"])
    """Required. Default value is \"invalid-user\"."""

    @overload
    def __init__(
        self,
        *,
        message: str,
    ) -> None: ...

    @overload
    def __init__(self, mapping: Mapping[str, Any]) -> None:
        """
        :param mapping: raw JSON to initialize the model.
        :type mapping: Mapping[str, Any]
        """

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)
        self.code: Literal["invalid-user"] = "invalid-user"


class UserExistsResponse(ApiError):
    """The user already exists.

    Readonly variables are only populated by the server, and will be ignored when sending a request.

    All required parameters must be populated in order to send to server.

    :ivar message: A human readable message. Required.
    :vartype message: str
    :ivar code: Required. Default value is "user-exists".
    :vartype code: str
    """

    code: Literal["user-exists"] = rest_field(visibility=["read", "create", "update", "delete", "query"])
    """Required. Default value is \"user-exists\"."""

    @overload
    def __init__(
        self,
        *,
        message: str,
    ) -> None: ...

    @overload
    def __init__(self, mapping: Mapping[str, Any]) -> None:
        """
        :param mapping: raw JSON to initialize the model.
        :type mapping: Mapping[str, Any]
        """

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)
        self.code: Literal["user-exists"] = "user-exists"
