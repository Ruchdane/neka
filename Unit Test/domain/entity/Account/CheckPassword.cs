using Backend.domain.entity;


    public class CheckPassword
    {
        [Fact]
        public void PasswordCheck_validPassord_returnTrue()
        {
            var account = new Account("duamelo", "1234", "student");

            var sut = account.CheckPassword("1234");

            Assert.True(sut);    
        }

        [Fact]
        public void PasswordCheck_WrongPassord_returnFalse()
        {
            var account = new Account("duamelo", "1234", "student");

            var sut = account.CheckPassword("123");

            Assert.False(sut);
        }
}