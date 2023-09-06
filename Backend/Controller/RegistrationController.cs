using Backend.domain.dto;
using Backend.domain.repository;
using Backend.domain.services;
using Microsoft.AspNetCore.Mvc;


namespace Backend.AppController
{
    public class RegistrationController  :ControllerBase
    {
        RegistrationService service;

        public RegistrationController(RegistrationService service)
        {
            this.service = service;
        }

        public IActionResult Register(CreateAcountDto account)
        {
            return Ok(service.Register(account));
        }
    }
}
