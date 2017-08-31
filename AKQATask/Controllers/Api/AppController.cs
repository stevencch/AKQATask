using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AKQATask.Filters;
using AKQATask.Contract.Models;
using AKQATask.Contract.Interfaces;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Localization;
using Microsoft.AspNetCore.Mvc.Localization;
using Microsoft.AspNetCore.Localization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AKQATask.Controllers.Api
{
    [Produces("application/json")]
    [Route("api/App")]
    [ServiceFilter(typeof(LoggingActionFilter))]
    public class AppController : Controller
    {
        private INumToWordsConvertorFactory numToWordsConvertorFactory;

        private readonly ILogger logger;

        public AppController(ILogger<AppController> logger, INumToWordsConvertorFactory numToWordsConvertorFactory)
        {
            this.numToWordsConvertorFactory = numToWordsConvertorFactory;
            this.logger = logger;
        }

        // POST api/values
        [HttpPost("convert")]
        public async Task<ResultModel> Convert([FromBody]InfoModel info)
        {
            var culture= this.HttpContext.Features.Get<IRequestCultureFeature>();
            var numToWordsConvertor = numToWordsConvertorFactory.CreateConvertor(culture.RequestCulture.Culture);
            var words =await numToWordsConvertor.ConvertToWords(info.Number);
            return new ResultModel()
            {
                Success = true,
                Message = "Success",
                Result = new InfoModel()
                {
                    Name = info.Name,
                    Number = words
                }
            };
        }
    }
}
