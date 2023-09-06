using Backend;
using Backend.Endpoints;

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

var resourceAllocator = new ResourceAllocator();
AuthenticationEndpoint.Map(app, resourceAllocator.createAuthenticationResources());
RegistrationEndpoint.Map(app, resourceAllocator.createRegistrationResources());


// using var db = new AppDbContext();
// Console.WriteLine($"Database path: {db.DbPath}.");


app.Run();
