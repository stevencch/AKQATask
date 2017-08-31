using AKQATask.Contract.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AKQATask.Core.Services
{
    public class NumToWordsConvertor : INumToWordsConvertor
    {
        private static readonly string[] singleWords = { "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" };
        private static readonly string[] tenTimesWords = { "zero", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety" };

        public string ConvertToWords(double number)
        {
            var result = string.Empty;
            var rightNum = (long)number;
            var leftNum =(long)Math.Round(number*100, 0, MidpointRounding.AwayFromZero)%100;
            var leftS = (leftNum == 1)?"":"s";
            var rightS = (rightNum == 0 || rightNum == 1)?"":"s";
            if (leftNum == 0)
            {
                result = $"{Convert(rightNum)} Dollar{rightS}";
            }
            else
            {
                result = $"{Convert(rightNum)} Dollar{rightS} and {Convert(leftNum)} Cent{leftS}";
            }
            return result.ToLower();
        }

        private string Convert(long number)
        {
            string result = string.Empty;
            if (number < 0)
            {
                result = $"minus {Convert(-number)}";
            }
            else if (number == 0)
            {
                result = singleWords[number];
            }
            else
            {
                var words = new List<string>();
                if ((number / 1000000000000) > 0)
                {
                    words.Add(string.Format("{0} trillion", Convert(number / 1000000000000)));
                    number %= 1000000000000;
                }

                if ((number / 1000000000) > 0)
                {
                    words.Add(string.Format("{0} billion", Convert(number / 1000000000)));
                    number %= 1000000000;
                }

                if ((number / 1000000) > 0)
                {
                    words.Add(string.Format("{0} million", Convert(number / 1000000)));
                    number %= 1000000;
                }

                if ((number / 1000) > 0)
                {
                    words.Add(string.Format("{0} thousand", Convert(number / 1000)));
                    number %= 1000;
                }

                if ((number / 100) > 0)
                {
                    words.Add(string.Format("{0} hundred", Convert(number / 100)));
                    number %= 100;
                }

                if (number > 0)
                {
                    if (words.Count != 0)
                        words.Add("and");

                    if (number < 20)
                        words.Add(singleWords[number]);
                    else
                    {
                        var lastWord = tenTimesWords[number / 10];
                        if ((number % 10) > 0)
                            lastWord += $"-{singleWords[number % 10]}";
                        words.Add(lastWord);
                    }
                }

                result = string.Join(" ", words.ToArray());
            }
            return result;
        }
    }
}
