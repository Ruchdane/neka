using Backend;
using Backend.db;
using Backend.Endpoints;
using Backend.Helpers;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();
app.UseStaticFiles();

using var db = new AppDbContext();
var appSettings = new AppSettings();
appSettings.Secret = "Very Very Secret";

var resourceAllocator = new ResourceAllocator(appSettings,db);
AuthenticationEndpoint.Map(app, resourceAllocator.createAuthenticationResources());
RegistrationEndpoint.Map(app, resourceAllocator.createRegistrationResources());
app.MapFallbackToFile("index.html");
// using var db = new AppDbContext();
// Console.WriteLine($"Database path: {db.DbPath}.");


app.Run();
