using Backend.domain.dto;
using Backend.domain.repository;
using Backend.Helpers;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Backend.domain.services
{
    public interface IAuthenticationService
    {
        AuthenticateResponse Authenticate(AuthenticateRequest model);
    }


    public class AuthenticationService
    {
        private IAccountRepository _accountRepository;
        private readonly AppSettings _appSettings;

        public AuthenticationService(IOptions<AppSettings> appSettings, IAccountRepository accountRepository)
        {
            _appSettings = appSettings.Value;
            _accountRepository = accountRepository;
        }

        // This function throws
        public AuthenticateResponse Authenticate(AuthenticateRequest accountDto)
        {
            var account = _accountRepository.GetByUsername(accountDto.Username);

            if (account == null) throw new Exception("this account does not exist");

            // authentication successful so generate jwt token
            var token = generateJwtToken(account);

            return new AuthenticateResponse(account, token);
        }

        private string generateJwtToken(AccountDtoWithHashPassword account)
        {
            // generate token that is valid for 7 days
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", account.id.ToString()) }),
                Expires = DateTime.UtcNow.AddMinutes(5),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
