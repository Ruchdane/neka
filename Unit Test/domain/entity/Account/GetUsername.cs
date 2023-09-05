
using Backend.domain.entity;

public class GetUsername
    {
        [Fact]
        public void GetUsernameReturnsCorrectUsername()
        {
            var account = new Account("duamelo", "1234", "student");

            Assert.Equal("duamelo", account.GetUsername());

        }
}