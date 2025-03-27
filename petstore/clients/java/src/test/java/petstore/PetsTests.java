package petstore;

import io.clientcore.core.http.exceptions.HttpResponseException;
import io.clientcore.core.http.pipeline.HttpInstrumentationOptions;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public final class PetsTests {

    private final PetsClient client = new PetStoreClientBuilder().endpoint("http://localhost:5118/")
        .httpInstrumentationOptions(
            new HttpInstrumentationOptions().setHttpLogLevel(HttpInstrumentationOptions.HttpLogLevel.BODY_AND_HEADERS))
        .buildPetsClient();

    @Test
    public void get() {
        int petId = 1;
        Pet pet = client.get(petId);
        Assertions.assertEquals(petId, pet.getId());
        Assertions.assertEquals("Kiwi", pet.getName());
    }

    @Test
    public void getFail() {
        HttpResponseException exception = Assertions.assertThrows(HttpResponseException.class, () -> client.get(100));
        Assertions.assertEquals(1, ((PetStoreError) exception.getValue()).getCode());
    }

    @Test
    public void list() {
        PetCollectionWithNextLink result = client.list();
        Assertions.assertEquals(2, result.getValue().size());
    }

    @Test
    public void create() {
        Pet pet = client.create(new PetCreate("MyPet", 7, 7L));
        Assertions.assertEquals(0, pet.getId());
        Assertions.assertEquals("MyPet", pet.getName());
    }

    @Test
    public void update() {
        Pet pet = client.update(0, new PetUpdate().setAge(8));
        Assertions.assertEquals(8, pet.getAge());
    }

    @Test
    public void delete() {
        client.delete(0);
    }
}
