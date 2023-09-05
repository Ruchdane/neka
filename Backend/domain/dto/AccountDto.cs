namespace Backend.domain.dto
{
    public class AccountDto
    {
        public AccountDto(string username, string profil)
        {
            this.username = username;
            this.profil = profil;
        }

        public  string username  { get;}
        public  string profil  { get;}
    }
}
