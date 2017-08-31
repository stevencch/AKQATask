using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AKQATask.Contract.Interfaces;
using AKQATask.Core.Services;
using AKQATask.Contract.Exceptions;

namespace AKQATask.Test
{
    [TestClass]
    public class NumToWordsTest
    {
        INumToWordsConvertor convertor;

        [TestInitialize]
        public void Init()
        {
            convertor = new NumToWordsConvertor();
        }
        [TestMethod]
        [DataRow(-1234567890.12, "minus one billion two hundred and thirty-four million five hundred and sixty-seven thousand eight hundred and ninety dollars and twelve cents")]
        [DataRow(0, "zero dollar")]
        [DataRow(1, "one dollar")]
        [DataRow(2, "two dollars")]
        [DataRow(1.01, "one dollar and one cent")]
        [DataRow(1.12, "one dollar and twelve cents")]
        [DataRow(3.134, "three dollars and thirteen cents")]
        [DataRow(4.135, "four dollars and fourteen cents")]
        [DataRow(11, "eleven dollars")]
        [DataRow(111, "one hundred and eleven dollars")]
        [DataRow(1111, "one thousand one hundred and eleven dollars")]
        [DataRow(11111, "eleven thousand one hundred and eleven dollars")]
        [DataRow(111111, "one hundred and eleven thousand one hundred and eleven dollars")]
        [DataRow(1111111, "one million one hundred and eleven thousand one hundred and eleven dollars")]
        [DataRow(11111111, "eleven million one hundred and eleven thousand one hundred and eleven dollars")]
        [DataRow(111111111, "one hundred and eleven million one hundred and eleven thousand one hundred and eleven dollars")]
        [DataRow(1111111111, "one billion one hundred and eleven million one hundred and eleven thousand one hundred and eleven dollars")]
        [DataRow(11111111111, "eleven billion one hundred and eleven million one hundred and eleven thousand one hundred and eleven dollars")]
        [DataRow(111111111111, "one hundred and eleven billion one hundred and eleven million one hundred and eleven thousand one hundred and eleven dollars")]
        public void TestNumberToWords(double input,string output)
        {
            var actual = convertor.ConvertToWords(input).Result;
            Assert.IsTrue(actual== output);
        }

        [TestMethod]
        [DataRow("1,234.12", "one thousand two hundred and thirty-four dollars and twelve cents")]
        public void TestNumberStringToWords(string input, string output)
        {
            var actual = convertor.ConvertToWords(input).Result;
            Assert.IsTrue(actual == output);
        }

        [TestMethod()]
        [ExpectedException(typeof(InvaildNumberException))]
        [DataRow("abc123", "na")]
        [DataRow("1999999999999.999", "na")]
        public void TestInvaildNumberException(string input, string output)
        {
            try
            {
                var actual = convertor.ConvertToWords(input).Result;
            }
            catch(AggregateException ex)
            {
                throw ex.InnerException;
            }
        }
    }
}
