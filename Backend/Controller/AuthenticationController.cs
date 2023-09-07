using Backend.domain.dto;
using Backend.domain.repository;
using Backend.domain.services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.AppController
{
    public class AuthenticationController : ControllerBase
    {
        AuthenticationService service;

        public AuthenticationController(AuthenticationService service)
        {
            this.service = service;
        }

        public IActionResult Authenticate(AuthenticateRequest request)
        {
            var response = new ControllerResponse<AuthenticateResponse>();
            try
            {
                response.Data = service.Authenticate(request);
            }
            catch(Exception ex)
            {
                response.Success = false;
                response.ErrorMessage = ex.Message; 
            }
            return Ok(response);
        }

        internal string test(HttpContext context)
        {
            return "Hello World";
        }
    }
}
