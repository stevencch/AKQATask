using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc.Filters;

namespace AKQATask.Filters
{
    public class LoggingActionFilter : ActionFilterAttribute
    {
        private readonly ILogger logger;
        public LoggingActionFilter(ILogger<LoggingActionFilter> logger)
        {
            this.logger = logger;
        }
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            logger.LogTrace($"action log: {context.HttpContext.Request.Method} url: {context.HttpContext.Request.Path} {context.HttpContext.Request.QueryString}");
            base.OnActionExecuting(context);
        }
    }
}
