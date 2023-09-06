using Backend.domain.dto;
using Backend.domain.repository;
using Microsoft.AspNetCore.Mvc;


namespace Backend.AppController
{
    public class RegistrationController 
    {
        private IAccountRepository repo;

        public RegistrationController(IAccountRepository repo)
        {
            this.repo = repo;
        }

        public AccountDto Register()
        {
            throw new NotImplementedException();
        }
    }
}
