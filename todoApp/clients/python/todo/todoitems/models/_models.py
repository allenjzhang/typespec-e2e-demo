# coding=utf-8
# pylint: disable=useless-super-delegation

from typing import Any, Literal, Mapping, Optional, overload

from ... import _model_base
from ..._model_base import rest_field
from ...models import ApiError


class InvalidTodoItem(ApiError):
    """InvalidTodoItem.

    :ivar code: A machine readable error code. Required.
    :vartype code: str
    :ivar message: A human readable message. Required.
    :vartype message: str
    """

    @overload
    def __init__(
        self,
        *,
        code: str,
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


class NotFoundErrorResponse(_model_base.Model):
    """NotFoundErrorResponse.

    :ivar code: Required. Default value is "not-found".
    :vartype code: str
    """

    code: Literal["not-found"] = rest_field(visibility=["read", "create", "update", "delete", "query"])
    """Required. Default value is \"not-found\"."""

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)
        self.code: Literal["not-found"] = "not-found"


class TodoItemPatch(_model_base.Model):
    """TodoItemPatch.

    :ivar title: The item's title.
    :vartype title: str
    :ivar assigned_to: User that the todo is assigned to.
    :vartype assigned_to: int
    :ivar description: A longer description of the todo item in markdown format.
    :vartype description: str
    :ivar status: The status of the todo item. Is one of the following types:
     Literal["NotStarted"], Literal["InProgress"], Literal["Completed"]
    :vartype status: str or str or str
    """

    title: Optional[str] = rest_field(visibility=["read", "create", "update", "delete", "query"])
    """The item's title."""
    assigned_to: Optional[int] = rest_field(
        name="assignedTo", visibility=["read", "create", "update", "delete", "query"]
    )
    """User that the todo is assigned to."""
    description: Optional[str] = rest_field(visibility=["read", "create", "update", "delete", "query"])
    """A longer description of the todo item in markdown format."""
    status: Optional[Literal["NotStarted", "InProgress", "Completed"]] = rest_field(
        visibility=["read", "create", "update", "delete", "query"]
    )
    """The status of the todo item. Is one of the following types: Literal[\"NotStarted\"],
     Literal[\"InProgress\"], Literal[\"Completed\"]"""

    @overload
    def __init__(
        self,
        *,
        title: Optional[str] = None,
        assigned_to: Optional[int] = None,
        description: Optional[str] = None,
        status: Optional[Literal["NotStarted", "InProgress", "Completed"]] = None,
    ) -> None: ...

    @overload
    def __init__(self, mapping: Mapping[str, Any]) -> None:
        """
        :param mapping: raw JSON to initialize the model.
        :type mapping: Mapping[str, Any]
        """

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)
