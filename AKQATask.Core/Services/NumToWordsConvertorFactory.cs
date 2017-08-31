using AKQATask.Contract.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;
using AKQATask.Contract;
using AKQATask.Core.Extentions;

namespace AKQATask.Core.Services
{
    public class NumToWordsConvertorFactory : INumToWordsConvertorFactory
    {
        public INumToWordsConvertor CreateConvertor(CultureInfo culture)
        {
            INumToWordsConvertor result;
            var cultureName=culture.Name;
            if (cultureName.Equals(EnumCulture.fr.GetDescription(), StringComparison.InvariantCultureIgnoreCase)
                || cultureName.Equals(EnumCulture.fr_FR.GetDescription(), StringComparison.InvariantCultureIgnoreCase))
            {
                result = new NumToWordsConvertorFr();
            }
            else
            {
                //default
                result = new NumToWordsConvertor();
            }

            return result;
        }
    }
}
