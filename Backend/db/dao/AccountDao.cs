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

        public Account? SelectByUsername(string username)
        {
            var accountList = context.Accounts.Where(account => account.Username == username).ToList();
            if (accountList.Count > 0)
            {
                return (Account?)accountList.First();
            }
            else
            {
                return null;
            }
        }

        public Account? SelectById(int accountId)
        {
            var accountList = context.Accounts.Where(account => account.id == accountId).ToList();
            if (accountList.Count > 0)
            {
                return (Account?)accountList.First();
            }
            else
            {
                return null;
            }
        }
    }
}
