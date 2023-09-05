using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Backend.db.model
{
    public class Account
    {
        public int Id { get; set; }

        [Required]
        public string Username { get; set; }
        [Required]
        public string hashPassword { get; set; }
        [Required]
        public string profile { get; set; }
    }
}
