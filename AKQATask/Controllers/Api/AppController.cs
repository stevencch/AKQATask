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
using System.Net.Http;
using System.Net;
using Newtonsoft.Json;
using System.Text;
using AKQATask.Contract.Exceptions;

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

        // POST Convert the input data
        [HttpPost("convert")]
        public async Task<IActionResult> Convert([FromBody]InfoModel info)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var culture = this.HttpContext.Features.Get<IRequestCultureFeature>();
                    //get convertor based on culture
                    var numToWordsConvertor = numToWordsConvertorFactory.CreateConvertor(culture.RequestCulture.Culture);
                    var words = await numToWordsConvertor.ConvertToWords(info.Number);
                    var result = new ResultModel()
                    {
                        Success = true,
                        Message = "Success",
                        Result = new InfoModel()
                        {
                            Name = info.Name,
                            Number = words
                        }
                    };

                    return Ok(result);
                }
                else
                {
                    logger.LogWarning("Invalid Data");
                    return BadRequest("Invalid data");
                }
            }
            catch (InvaildNumberException iex)
            {
                logger.LogWarning(iex.Message);
                return BadRequest(iex.Message);
            }
            catch (Exception ex)
            {
                logger.LogError("failed to post", ex);
                return BadRequest("Server is unavailable, please try again later");
            }


        }
    }
}
