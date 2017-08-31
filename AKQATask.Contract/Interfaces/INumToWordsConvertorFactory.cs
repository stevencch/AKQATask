using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AKQATask.Contract.Interfaces
{
    public interface INumToWordsConvertorFactory
    {
        INumToWordsConvertor CreateConvertor(CultureInfo culture);
    }
}
