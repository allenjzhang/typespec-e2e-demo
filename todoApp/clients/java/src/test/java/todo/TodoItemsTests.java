package todo;

import io.clientcore.core.util.binarydata.BinaryData;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import todo.todoitems.PageTodoAttachment;
import todo.todoitems.TodoItemPatch;
import todo.todoitems.TodoPage;

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
        TodoPage todoItemsPage = client.list();
        Assertions.assertEquals(1L, todoItemsPage.getItems().size());
        Assertions.assertEquals("Need to buy milk", todoItemsPage.getItems().get(0).getDescription());

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

        PageTodoAttachment attachments = attachmentsClient.list(todoItemId);
        Assertions.assertEquals(2, attachments.getItems().size());
        Assertions.assertEquals(List.of("code1.java", "code2.java"),
            attachments.getItems().stream().map(TodoAttachment::getFilename).toList());
    }
}
