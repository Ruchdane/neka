using Backend.db.model;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;

namespace Backend.db.dao
{
    public class AccountDao
    {
        private AppDbContext context;

        public AccountDao(AppDbContext context)
        {
            this.context = context;
        }

        public void Insert(Account account)
        {
            context.Add(account);
            context.SaveChanges();
        }

        public Account SelectByUsername(string username)
        {
            var account = context.Accounts.Where(account => account.Username == username).First();
            return account;
        }

        public Account SelectById(int accountId)
        {
            var account = context.Accounts.Where(account => account.Id == accountId).First();
            return account;
        }
    }
}
