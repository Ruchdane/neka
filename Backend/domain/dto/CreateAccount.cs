﻿namespace Backend.domain.dto
{
    public class CreateAcountDto
    {
        public CreateAcountDto(string username, string password, string profil)
        {
            this.username = username;
            this.password = password;
            this.profil = profil;
        }

        public string username  { get;}
        public string password { get;}
        public string profil { get;}
    }
}
