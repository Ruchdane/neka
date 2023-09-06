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

        public AccountDtoWithHashPassword GetById(int id)
        {
            var model = dao.SelectById(id);
            return new AccountDtoWithHashPassword(model.id, model.username, model.hashPassword, model.profil);
        }

        public AccountDtoWithHashPassword GetByUsername(string username)
        {
            var model = dao.SelectByUsername(username);
            return new AccountDtoWithHashPassword(model.id, model.username, model.hashPassword, model.profil);

        }

        public void Save(CreateAcountDto dto)
        {
            var accountModel = new Account { username = dto.username, profil = dto.profil, hashPassword = dto.password };
            dao.Insert(accountModel);
        }
    }
}
