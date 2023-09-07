using Backend.AppController;

namespace Backend.Endpoints
{
    public class AuthenticationEndpoint
    {
        public static void Map(WebApplication app, AuthenticationController controler)
        {
            app.MapGet("/api/auth", controler.test);
            app.MapPost("/api/auth", controler.Authenticate);
        }

    }
}
