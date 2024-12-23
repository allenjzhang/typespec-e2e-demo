using System.ClientModel;
using Todo;
using Todo.Models;

namespace PetStore.Tests
{
    public class UsersClientTests
    {
        private Users _usersClient;

        [OneTimeSetUp]
        public void Setup()
        {
            var cred = new ApiKeyCredential("stub");
            _usersClient = new TodoClient(new Uri("http://localhost:5244"), cred).GetUsersClient();
        }

        [Test]
        public async Task CreateUser()
        {
            var user = new User("John Doe", "test@dummy.com", "p@ssw0rd");
            var response = await _usersClient.CreateAsync(user);

            Assert.AreEqual(200, response.GetRawResponse().Status);
            var result = response.Value;

            Assert.AreEqual(0, result.Id);
            Assert.AreEqual(user.Username, result.Username);
            Assert.AreEqual(user.Email, result.Email);
            Assert.IsNotNull(result.Token);

            // call again, the id is still 0
            var anotherUser = new User("Jane Doe", "test@dummy.net", "p@ssw0rd");
            var newResponse = await _usersClient.CreateAsync(anotherUser);
            Assert.AreEqual(0, newResponse.Value.Id);
            Assert.AreEqual(anotherUser.Username, newResponse.Value.Username);
            Assert.AreEqual(anotherUser.Email, newResponse.Value.Email);
            Assert.IsNotNull(newResponse.Value.Token);
        }
    }
}