import pytest
from corehttp.credentials import ServiceKeyCredential
from todo import TodoClient
from todo.models import (
    User,
    TodoItem,
    TodoAttachment,
    ToDoItemMultipartRequest,
    FileAttachmentMultipartRequest,
)
from todo.todoitems.models import TodoItemPatch
from corehttp.exceptions import ResourceNotFoundError
import os

IMAGE_PATH = os.path.join(os.path.dirname(__file__), "image.jpg")


@pytest.fixture
def client():
    return TodoClient("http://localhost:5244", ServiceKeyCredential("dummy"))


@pytest.fixture
def image_data():
    with open(IMAGE_PATH, "rb") as f:
        return f.read()


def test_users_create(client):
    user = client.users.create(User(username="John Doe", email="test@example.com", password="p@ssw0rd"))
    assert user.username == "John Doe"
    assert user.email == "test@example.com"


def test_todo_items_create_json(client):
    todo_item = client.todo_items.create_json(
        item=TodoItem(
            title="Buy milk",
            status="InProgress",
            assigned_to=10,
            description="Need to buy milk",
        ),
        attachments=[TodoAttachment(filename="test.jpg", media_type="image/jpeg", contents=b"test")],
    )
    assert todo_item.title == "Buy milk"
    assert todo_item.status == "InProgress"
    assert todo_item.assigned_to == 10
    assert todo_item.description == "Need to buy milk"


def test_todo_item_get(client):
    todo_item = client.todo_items.get(0)
    assert todo_item.title == "Buy milk"
    assert todo_item.status == "InProgress"
    assert todo_item.assigned_to == 10
    assert todo_item.description == "Need to buy milk"


def test_todo_item_get_invalid(client):
    with pytest.raises(ResourceNotFoundError) as exc_info:
        client.todo_items.get(1)
    error = exc_info.value.response.json()
    assert error["code"] == "not-found"


def test_todo_item_update(client):
    updated_item = client.todo_items.update(
        0, TodoItemPatch(title="Buy milk and bread", status="Completed", assigned_to=20)
    )
    assert updated_item.title == "Buy milk and bread"
    assert updated_item.status == "Completed"
    assert updated_item.assigned_to == 20


def test_todo_item_list(client):
    todo_items = client.todo_items.list()
    for item in todo_items:
        assert item.title == "Buy milk and bread"
        assert item.status == "Completed"


def test_todo_item_delete(client):
    client.todo_items.delete(0)


def assert_attachment_item(client, item_id, item_num, image_data):
    result = list(client.todo_items.attachments.list(item_id))
    assert len(result) >= item_num
    for item in result:
        assert item.filename == "image.jpg"
        assert item.media_type == "application/octet-stream"
        assert item.contents == image_data


def test_todo_items_create_form_and_attachments_list(client, image_data):
    todo_item = client.todo_items.create_form(
        ToDoItemMultipartRequest(
            item=TodoItem(
                title="Feed pet",
                status="InProgress",
                assigned_to=10,
                description="Need to feed pet",
            ),
            attachments=[open(IMAGE_PATH, "rb")],
        )
    )
    print(f"Todo item {todo_item.id} created")
    assert todo_item.title == "Feed pet"
    assert todo_item.status == "InProgress"
    assert todo_item.assigned_to == 10
    assert todo_item.description == "Need to feed pet"

    assert_attachment_item(client, todo_item.id, 1, image_data)


def test_create_json_attachmets(client, image_data):
    client.todo_items.attachments.create_json_attachment(
        item_id=0,
        contents=TodoAttachment(filename="image.jpg", media_type="application/octet-stream", contents=image_data),
    )
    assert_attachment_item(client, 0, 2, image_data)


def test_create_json_attachmets(client, image_data):
    client.todo_items.attachments.create_json_attachment(
        item_id=0,
        contents=TodoAttachment(filename="image.jpg", media_type="application/octet-stream", contents=image_data),
    )
    assert_attachment_item(client, 0, 2, image_data)


def test_create_form_attachmets(client, image_data):
    client.todo_items.attachments.create_file_attachment(
        item_id=0,
        body=FileAttachmentMultipartRequest(contents=open(IMAGE_PATH, "rb")),
    )
    assert_attachment_item(client, 0, 3, image_data)
