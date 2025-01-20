package todo;

import io.clientcore.core.http.models.PagedIterable;
import io.clientcore.core.util.binarydata.BinaryData;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import todo.todoitems.TodoItemPatch;

import java.util.List;
import java.util.stream.Collectors;

public class TodoItemsTests {

    private final TodoClientBuilder builder = new TodoClientBuilder().endpoint("http://localhost:5244/");
    private final TodoItemsClient client = builder.buildTodoItemsClient();
    private final TodoItemsAttachmentsClient attachmentsClient = builder.buildTodoItemsAttachmentsClient();

    @Test
    public void test() {
        // create item
        CreateJsonResponse createTodoItemResponse = client.createJson(
            new TodoItem("Buy milk", TodoItemStatus.IN_PROGRESS).setDescription("Need to buy milk").setAssignedTo(1L));
        long todoItemId = createTodoItemResponse.getId();
        Assertions.assertEquals("Buy milk", createTodoItemResponse.getTitle());
        Assertions.assertEquals(TodoItemStatus.IN_PROGRESS, createTodoItemResponse.getStatus());

        // get item
        GetResponse getTodoItemResponse = client.get(todoItemId);
        Assertions.assertEquals(1L, getTodoItemResponse.getAssignedTo());

        // update item
        UpdateResponse updateTodoItemResponse
            = client.update(todoItemId, new TodoItemPatch().setStatus(TodoItemPatchStatus.COMPLETED));
        Assertions.assertEquals(TodoItemStatus.COMPLETED, updateTodoItemResponse.getStatus());

        // TODO pageable
        // list items
        PagedIterable<TodoItem> todoItems = client.list();
        Assertions.assertEquals(1L, todoItems.stream().count());
        Assertions.assertEquals("Need to buy milk", todoItems.iterator().next().getDescription());

        // delete item
        client.delete(todoItemId);
    }

    @Test
    public void testAttachment() {
        final BinaryData javaFileContent = BinaryData.fromString("public class Main {}");

        CreateFormResponse createTodoItemResponse
            = client.createForm(new ToDoItemMultipartRequest(new TodoItem("Read code", TodoItemStatus.NOT_STARTED))
                .setAttachments(List.of(new FileDetails(javaFileContent).setFilename("code1.java"))));
        long todoItemId = createTodoItemResponse.getId();

        attachmentsClient.createFileAttachment(todoItemId,
            new FileAttachmentMultipartRequest(new FileDetails(javaFileContent).setFilename("code2.java")));

        PagedIterable<TodoAttachment> attachments = attachmentsClient.list(todoItemId);
        Assertions.assertEquals(2, attachments.stream().count());
        Assertions.assertEquals(List.of("code1.java", "code2.java"),
            attachments.stream().map(TodoAttachment::getFilename).toList());
    }
}
