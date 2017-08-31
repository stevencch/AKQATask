using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AKQATask.Controllers
{
    public class HomeController : Controller
    {
        [Route("/")]
        [Route("/converter")]
        [Route("/info")]
        public IActionResult Index()
        {
            if (Request.Path.HasValue && Request.Path.Value.Length<3)
            {
                return Redirect("/");
            }
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
