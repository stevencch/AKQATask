using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AKQATask.Core.Services
{
    public class NumToWordsConvertorFr : AbstractConvertor
    {
        public override async Task<string> ConvertToWords(double number)
        {
            return await Task.Run(()=> { return "Not Implemented"; });
        }
    }
}
