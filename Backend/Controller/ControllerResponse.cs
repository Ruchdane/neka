namespace Backend.AppController
{
    public class ControllerResponse<T>
    {
        public bool Success { get; set; }
        public T Data { get; set; }
        public string ErrorMessage { get; set; }
        public ControllerResponse()
        {
            Success = true;
        }
    }
}
