using Backend.domain.entity;

    public class GetProfile
    {

        [Fact]
        public void GetProfileReturnsCorrectProfile()
        {
        var account = new Account("duamelo", "1234", "student");

        Assert.Equal("student", account.GetProfile());
        }
    }