using Backend.domain.dto;
using Backend.domain.entity;

namespace Backend.domain.assembler
{
    public class AccountAssembler
    {
        public Account CreateAccount(AccountDtoWithHashPassword accountDto)
        {
            Account account = new Account(accountDto.username, accountDto.hashPassword, accountDto.profil);

            return account;
        }
        public AccountDto CreateAccountDto(Account account)
        {
            AccountDto accountDto = new AccountDto(account.GetUsername(), account.GetProfile());

            return accountDto;
        }

    }
}
