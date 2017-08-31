using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AKQATask.Contract.Models
{
    public class InfoModel
    {
        public string Name { get; set; }
        [RegularExpression("^[0-9,.]+$")]
        public string Number { get; set; }
    }
}
