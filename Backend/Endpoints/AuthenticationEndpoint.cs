using Backend.AppController;

namespace Backend.Endpoints
{
    public class AuthenticationEndpoint
    {
        public static void Map(WebApplication app, AuthenticationController controler)
        {
            app.MapPost("auth", controler.Authenticate);
        }

    }
}
