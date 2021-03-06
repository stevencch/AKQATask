﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AKQATask.Contract.Interfaces
{
    public interface INumToWordsConvertor
    {
        Task<string> ConvertToWords(double number);

        Task<string> ConvertToWords(string number);
    }
}
