using Backend;
using Backend.db;
using Backend.Endpoints;
using Backend.Helpers;

var builder = WebApplication.CreateBuilder(args);
// 1) define a unique string
string AllowFrontendProxy = "_allowFrontendProxy";

// 2) define allowed domains, in this case "http://localhost:3000" and "*" = all
//    domains, for testing purposes only.
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: AllowFrontendProxy,
        builder =>
        {
            builder.WithOrigins(
            "http://localhost:3000", "*");
        });
});
var app = builder.Build();
if (!app.Environment.IsDevelopment())
{
    app.UseHsts();
}
else
{
    app.UseCors(AllowFrontendProxy);
    app.MapGet("/debug/routes", (IEnumerable<EndpointDataSource> endpointSources) =>
        string.Join("\n", endpointSources.SelectMany(source => source.Endpoints)));
}

using var db = new AppDbContext();
var appSettings = new AppSettings();
appSettings.Secret = "Very Very Secret";
var resourceAllocator = new ResourceAllocator(appSettings, db);
AuthenticationEndpoint.Map(app, resourceAllocator.createAuthenticationResources());
RegistrationEndpoint.Map(app, resourceAllocator.CreateRegistrationResources());
app.UseHttpsRedirection();
app.UseStaticFiles();
app.MapFallbackToFile("index.html");
app.Run();