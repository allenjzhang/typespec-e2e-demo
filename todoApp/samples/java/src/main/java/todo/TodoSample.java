package todo;

import io.clientcore.core.http.exception.HttpResponseException;
import io.clientcore.core.util.binarydata.BinaryData;
import todo.todoitems.PageTodoAttachment;
import todo.todoitems.TodoItemPatch;
import todo.todoitems.TodoPage;

import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Random;

public final class TodoSample {

    public static void main(String... args) {

        // client
        TodoClientBuilder builder = new TodoClientBuilder().endpoint("http://localhost:5244/");
        UsersClient usersClient = builder.buildUsersClient();
        TodoItemsClient todoItemsClient = builder.buildTodoItemsClient();
        TodoItemsAttachmentsClient todoItemsAttachmentsClient = builder.buildTodoItemsAttachmentsClient();

        // create user
        CreateResponse createUserResponse
            = usersClient.create(new User("John Doe", "test@example.com", randomString()));
        System.out.println("user created, id=" + createUserResponse.getId());

        // create item
        CreateJsonResponse createTodoItemResponse = todoItemsClient.createJson(
            new TodoItem("Buy milk", TodoItemStatus.IN_PROGRESS).setDescription("Need to buy milk").setAssignedTo(1L));
        long todoItemId = createTodoItemResponse.getId();
        System.out.println("todo item created, id=" + todoItemId);

        // get item
        GetResponse getTodoItemResponse = todoItemsClient.get(todoItemId);
        System.out.println("todo item queried, title=" + getTodoItemResponse.getTitle());

        // update item
        UpdateResponse updateTodoItemResponse
            = todoItemsClient.update(todoItemId, new TodoItemPatch().setStatus(TodoItemPatchStatus.COMPLETED));
        System.out.println("todo item updated, status=" + updateTodoItemResponse.getStatus());

        // TODO pageable
        // list items
        TodoPage todoItemsPage = todoItemsClient.list();
        todoItemsPage.getItems()
            .forEach(item -> System.out
                .println("todo item in list, title=" + item.getTitle() + ", status=" + item.getStatus()));

        todoItemsClient.delete(todoItemId);
        System.out.println("todo item deleted, id=" + todoItemId);

        // create item via multipart/form-data
        CreateFormResponse createTodoItemFormResponse = todoItemsClient.createForm(
            new ToDoItemMultipartRequest(new TodoItem("Read code", TodoItemStatus.NOT_STARTED)).setAttachments(
                List.of(new FileDetails(BinaryData.fromString("public class Main {}")).setFilename("code1.java"))));
        long todoItemId2 = createTodoItemFormResponse.getId();
        System.out.println("todo item created via multipart/form-data, id=" + todoItemId2);

        // create attachment via multipart/form-data
        todoItemsAttachmentsClient.createFileAttachment(todoItemId2,
            new FileAttachmentMultipartRequest(
                new FileDetails(BinaryData.fromString("public class Main { private int i = 1; }"))
                    .setFilename("code2.java")));
        System.out.println("todo item attachment created via multipart/form-data");

        // list attachment
        PageTodoAttachment todoAttachments = todoItemsAttachmentsClient.list(todoItemId2);
        // TODO pageable
        todoAttachments.getItems()
            .forEach(
                attachment -> System.out.println("todo item attachment in list, filename=" + attachment.getFilename()
                    + ", content=" + new String(attachment.getContents(), StandardCharsets.UTF_8)));

        // delete item
        todoItemsClient.delete(todoItemId2);
        System.out.println("todo item deleted, id=" + todoItemId2);

        System.exit(0);
    }

    private static final Random RANDOM = new Random(3);

    private static String randomString() {
        int leftLimit = 97; // letter 'a'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = RANDOM.nextInt(16) + 1;

        return RANDOM.ints(leftLimit, rightLimit + 1)
            .limit(targetStringLength)
            .collect(StringBuilder::new, StringBuilder::appendCodePoint, StringBuilder::append)
            .toString();
    }
}
