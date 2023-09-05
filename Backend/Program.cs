using Backend.db;
using Backend.db.dao;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();
if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.MapFallbackToFile("index.html");


using var db = new AppDbContext();
Console.WriteLine($"Database path: {db.DbPath}.");

var accountDao = new AccountDao(db);

app.MapGet("/api/create", () =>
{
    var account = new Backend.db.model.Account { profile = "Student", Username = "Test", hashPassword = "^ddoidnoandoanzaio" } ;
    accountDao.Insert(account);
    return "";
});

app.MapGet("/api/get", () =>
{
    var account  = accountDao.SelectByUsername("Test");
    return account.hashPassword;
});

app.Run();
