using Backend.domain.dto;
using Backend.domain.repository;
using Backend.domain.services;
using Microsoft.AspNetCore.Mvc;

namespace Backend.AppController
{
    public class AuthenticationController 
    {
        AuthenticationService service;

        public AuthenticationController(AuthenticationService service)
        {
            this.service = service;
        }

        public IActionResult Authenticate(AuthenticateRequest request)
        {
            return Ok(service.Authenticate(request));
        }
    }
}
