using Backend.domain.dto;

namespace Backend.domain.repository
{
    public interface IAccountRepository
    {
        void Save(CreateAcountDto dto);
        AccountDtoWithHashPassword? GetByUsername(string username);

        AccountDtoWithHashPassword? GetById(int id);
    }
}
