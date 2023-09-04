namespace Backend.domain.dto
{
    public class AuthenticateDto
    {
        public AuthenticateDto(string username, string profil)
        {
            this.username = username;
            this.profil = profil;
        }

        public string username { get;}
        public  string profil  { get;}
    }
}
