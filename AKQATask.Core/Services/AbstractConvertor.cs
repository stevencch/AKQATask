using AKQATask.Contract;
using AKQATask.Contract.Exceptions;
using AKQATask.Contract.Interfaces;
using NLog;
using System;
using System.Collections.Generic;
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
            if(double.TryParse(number,out value)){
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
