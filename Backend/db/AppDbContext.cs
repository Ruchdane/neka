using Backend.db.model;
using Microsoft.EntityFrameworkCore;

namespace Backend.db
{
    public class AppDbContext : DbContext
    {
        public DbSet<Account> Accounts { get; set; }
        public string DbPath { get; }

        public AppDbContext()
        {
            var folder = Environment.SpecialFolder.LocalApplicationData;
            var path = Environment.GetFolderPath(folder);
            DbPath = Path.Join(path, "test.db");
        }

        // The following configures EF to create a Sqlite database file in the
        // special "local" folder for your platform.
        protected override void OnConfiguring(DbContextOptionsBuilder options)
            => options.UseSqlite($"Data Source={DbPath}");
    }
}