namespace Backend.domain.dto
{
    public class AccountDtoWithHashPassword
    {
        public AccountDtoWithHashPassword(string username, string hashPassword, string profil)
        {
            this.username = username;
            this.hashPassword = hashPassword;
            this.profil = profil;
        }

        public string username  { get;}
        public string hashPassword { get;}
        public string profil { get;}
    }
}
