namespace Backend.domain.dto
{
    public class AccountDtoWithHashPassword
    {
        public AccountDtoWithHashPassword(int id, string username, string hashPassword, string profil)
        {
            this.id = id;
            this.username = username;
            this.hashPassword = hashPassword;
            this.profil = profil;
        }

        public int id { get;}
        public string username  { get;}
        public string hashPassword { get;}
        public string profil { get;}
    }
}
