using Backend.AppController;
using Backend.db;
using Backend.db.dao;
using Backend.Db.Repository;
using Backend.domain.services;
using Backend.Helpers;

namespace Backend
{
    public class ResourceAllocator
    {
        AppDbContext dbContext;
        AppSettings appSettings;

        public ResourceAllocator(AppSettings appSettings,AppDbContext dbContext)
        {
            this.dbContext = dbContext;
            this.appSettings = appSettings;
        }

        public AuthenticationController createAuthenticationResources()
        {
            var accountDao = new AccountDao(dbContext);
            var accountRepo = new AccountRepository(accountDao);
            var service = new AuthenticationService(appSettings,accountRepo);
            var controler = new AuthenticationController(service);
            return controler;
        }

        public RegistrationController createRegistrationResources()
        {
            var accountDao = new AccountDao(dbContext);
            var accountRepo = new AccountRepository(accountDao);
            var service = new RegistrationService(accountRepo);
            var controler = new RegistrationController(service);
            return controler;
        }
    }
}
