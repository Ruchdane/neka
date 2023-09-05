using Backend.domain.assembler;
using Backend.domain.entity;

public class CreateAccountDto
{
        [Fact]
        public void AssembledAccountDTOHasCorrectProperty()
        {
            var accountAssembler = new AccountAssembler();
            var account = new Account("duamelo", "1234", "student");
            var accountDto = accountAssembler.CreateAccountDto(account);

            Assert.Equal("duamelo", accountDto.username);
            Assert.Equal("student", accountDto.profil);
        }
}