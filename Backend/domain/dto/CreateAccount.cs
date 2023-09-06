namespace Backend.domain.dto
{
    public class CreateAcountDto
    {
        public CreateAcountDto(string username, string password, string profil)
        {
            this.username = username;
            this.password = password;
            this.profil = profil;
        }

        public string username  { get; set; }
        public string password { get; set; }
        public string profil { get; set; }
    }
}
