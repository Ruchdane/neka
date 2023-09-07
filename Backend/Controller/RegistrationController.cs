using Backend.domain.dto;
using Backend.domain.repository;
using Backend.domain.services;
using Microsoft.AspNetCore.Mvc;


namespace Backend.AppController
{
    public class RegistrationController  :ControllerBase
    {
        readonly RegistrationService service;

        public RegistrationController(RegistrationService service)
        {
            this.service = service;
        }

        public IActionResult Register(CreateAcountDto account)
        {
            var response = new ControllerResponse<string>();
            try
            {
                service.Register(account);

            }
            catch (Exception ex)
            {
                response.Success = false;
                response.ErrorMessage = ex.Message;
            }
            return Ok(response);
        }
    }
}
