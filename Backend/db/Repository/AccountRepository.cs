using Backend.db.dao;
using Backend.db.model;
using Backend.domain.dto;
using Backend.domain.repository;

namespace Backend.Db.Repository
{
    public class AccountRepository : IAccountRepository
    {
        AccountDao dao;

        public AccountRepository(AccountDao dao)
        {
            this.dao = dao;
        }

        public AccountDtoWithHashPassword? GetById(int id)
        {
            var model = dao.SelectById(id);
            if (model == null)
            {
                return null;
            }
            else
            {
                return (AccountDtoWithHashPassword?)new AccountDtoWithHashPassword(model.id, model.Username, model.HashPassword, model.Profil);
            }
        }

        public AccountDtoWithHashPassword? GetByUsername(string username)
        {
            var model = dao.SelectByUsername(username);
            if (model == null)
            {
                return null;
            }
            else
            {
                return (AccountDtoWithHashPassword?)new AccountDtoWithHashPassword(model.id, model.Username, model.HashPassword, model.Profil);
            }

        }

        public void Save(CreateAcountDto dto)
        {
            var accountModel = new Account { Username = dto.username, Profil = dto.profil, HashPassword = dto.password };
            dao.Insert(accountModel);
        }
    }
}
