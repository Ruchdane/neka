using Backend.domain.dto;


public class AuthenticateResponse
{
    public int Id { get; set; }
    public string Username { get; set; }
    public string Token { get; set; }


    public AuthenticateResponse(AccountDtoWithHashPassword account, string token)
    {
        Username = account.username;
        Token = token;
    }
}