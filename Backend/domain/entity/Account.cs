namespace Backend.domain.entity
{
    public class Account
    {
        private string username;
        private string hashPassword;
        private string profil;

        public Account(string username, string hashPassword, string profil)
        {
            this.username = username;
            this.hashPassword = hashPassword;
            this.profil = profil;
        }

        public string GetUsername()
        {
            throw new NotImplementedException();
        }

        public string GetProfile()
        {
            throw new NotImplementedException();
        }


        public bool CheckPassword(string password)
        {
            throw new NotImplementedException();
        }


    }
}
