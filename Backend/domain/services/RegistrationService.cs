using Backend.domain.assembler;
using Backend.domain.dto;
using Backend.domain.entity;
using Backend.domain.repository;


namespace Backend.domain.services
{
    public class RegistrationService
    {
        private IAccountRepository _accountRepository;

        public RegistrationService( IAccountRepository accountRepository)
        {
            _accountRepository = accountRepository;
        }

        public void Register(CreateAcountDto accountDto)
        {
            var accountExist = _accountRepository.GetByUsername(accountDto.username);

            if (accountExist) throw new Exception("This account with that username already exist");

            if (!accountExist.username.ToLower().Compare(accountDto.username.Tolower())
                throw new Exception("This account with that username already exist");
            if (accountDto.username.Contains(" ") || accountDto.username == String.Empty || accountDto.username.Length < 3)
                throw new Exception("This username is not correct");
            


            var hashPassword = BCrypt.Net.BCrypt.HashPassword(accountDto.password, 10);

            accountDto.password = hashPassword;
            accountDto.username = accountDto.username.ToLower();
            _accountRepository.Save(accountDto);
        }
    }
}
