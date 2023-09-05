using Backend.db;
using Backend.db.dao;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

using var db = new AppDbContext();
Console.WriteLine($"Database path: {db.DbPath}.");

var accountDao = new AccountDao(db);

app.MapGet("/create", () =>
{
    var account = new Backend.db.model.Account { profile = "Student", Username = "Test", hashPassword = "^ddoidnoandoanzaio" } ;
    accountDao.Insert(account);
    return "";
});

app.MapGet("/", () =>
{
    var account  = accountDao.SelectByUsername("Test");
    return account.hashPassword;
});

app.Run();
