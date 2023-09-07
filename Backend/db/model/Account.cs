using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Backend.db.model
{
    public class Account
    {
        public int id { get; set; }

        [Required]
        public string Username { get; set; }
        [Required]
        public string HashPassword { get; set; }
        [Required]
        public string Profil { get; set; }
    }
}
