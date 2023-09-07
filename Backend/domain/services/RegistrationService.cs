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

            var hashPassword = BCrypt.Net.BCrypt.HashPassword(accountDto.password, 10);

            accountDto.password = hashPassword;
            _accountRepository.Save(accountDto);
        }
    }
}
