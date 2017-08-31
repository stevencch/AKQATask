using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AKQATask.Filters;
using AKQATask.Contract.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AKQATask.Controllers.Api
{
    [Produces("application/json")]
    [Route("api/App")]
    [ServiceFilter(typeof(LoggingActionFilter))]
    public class AppController : Controller
    {
        // POST api/values
        [HttpPost("convert")]
        public ResultModel Convert([FromBody]InfoModel info)
        {
            return new ResultModel()
            {
                Success = true,
                Message = "Success",
                Result = new InfoModel()
                {
                    Name = info.Name,
                    Number = "aaa"
                }
            };
        }
    }
}
