using Backend.domain.dto;

namespace Backend.domain.entity
{
    public class Account
    {
        private int Id;
        private string username;
        private string hashPassword;
        private string profil;

        public Account(string username, string hashPassword, string profil)
        {
            this.username = username;
            this.hashPassword = hashPassword;
            this.profil = profil;
        }

        public int GetId()
        {
            return this.Id;
        }
        public string GetUsername()
        {
            return this.username;
        }

        public string GetProfile()
        {
            return this.profil;
        }


        public bool CheckPassword(string password)
        {
            return this.hashPassword == password ? true : false;
        }

        public bool isEqual(Account account)
        {
            if (this.profil == account.GetProfile() && 
                account.CheckPassword(this.hashPassword) && 
                this.username == account.GetUsername()
            )
                return true;
            return false;
        }


    }
}
