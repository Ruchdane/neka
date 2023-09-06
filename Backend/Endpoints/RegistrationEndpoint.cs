using Backend.AppController;

namespace Backend.Endpoints
{
    public class RegistrationEndpoint
    {
        public static void Map(WebApplication app,RegistrationController controler)
        {
            app.MapPost("/api/register", controler.Register) ;
        }
    }
}
