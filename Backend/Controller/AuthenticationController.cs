using Backend.domain.dto;
using Backend.domain.repository;
using Microsoft.AspNetCore.Mvc;

namespace Backend.AppController
{
    [ApiController]
    [Route("auth")]
    public class AuthenticationController : ControllerBase
    {
        private IAccountRepository repo;
        public AuthenticationController(IAccountRepository repo)
        {
            this.repo = repo;
        }
        [HttpGet("")]
        public AccountDto Authenticate()
        {
            throw new NotImplementedException();
        }
    }
}
