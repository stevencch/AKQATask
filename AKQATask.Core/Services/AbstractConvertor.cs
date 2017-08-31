using AKQATask.Contract;
using AKQATask.Contract.Exceptions;
using AKQATask.Contract.Interfaces;
using AKQATask.Core.Extentions;
using NLog;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AKQATask.Core.Services
{
    public abstract class AbstractConvertor : INumToWordsConvertor
    {
        public abstract Task<string> ConvertToWords(double number);

        public async Task<string> ConvertToWords(string number)
        {
            double value;
            number = number.Replace(",", "").Replace(" ", "");
            if (double.TryParse(number, NumberStyles.Any, new CultureInfo(EnumCulture.en_US.GetDescription()),out value)){
                if (value > AppSettings.MAX_NUMBER)
                {
                    throw new InvaildNumberException($"{number} is over the max value.");
                }
                var result= await ConvertToWords(value);
                return result;
            }
            else
            {
                throw new InvaildNumberException($"{number} is invalid.");
            }
        }
    }
}
