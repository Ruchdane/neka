using Backend.domain.entity;

    public class Accounts
    {
        [Fact]
    public void Account_ValidData_Create()
        {
            var sut = new Account("duamelo", "1234", "student");

            Assert.Equal("duamelo", sut.GetUsername());
            Assert.True(sut.CheckPassword("1234"));
            Assert.Equal("student", sut.GetProfile());
        }
}