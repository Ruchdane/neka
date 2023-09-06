using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Backend.db.model
{
    public class Account
    {
        public int id { get; set; }

        [Required]
        public string username { get; set; }
        [Required]
        public string hashPassword { get; set; }
        [Required]
        public string profil { get; set; }
    }
}
