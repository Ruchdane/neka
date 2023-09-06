using Backend.db;
using Backend.db.dao;
using var db = new AppDbContext();

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


Console.WriteLine($"Database path: {db.DbPath}.");

var accountDao = new AccountDao(db);


app.Run();
