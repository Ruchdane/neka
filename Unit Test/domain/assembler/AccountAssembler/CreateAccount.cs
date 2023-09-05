using Backend.domain.assembler;
using Backend.domain.dto;


public class CreateAccount
{
        [Fact]
        public void AssembledAccountHasCorrectProperty()
        {
            var accountAssembler = new AccountAssembler();
            var accountDto = new AccountDtoWithHashPassword(1, "duamelo", "1234", "student");
            var account = accountAssembler.CreateAccount(accountDto);

            Assert.Equal("duamelo", account.GetUsername());
            Assert.Equal("student", account.GetProfile());
            Assert.True(account.CheckPassword("1234"));
        }
}