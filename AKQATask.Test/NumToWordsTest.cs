using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using AKQATask.Contract.Interfaces;
using AKQATask.Core.Services;

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
            var actual = convertor.ConvertToWords(input);
            Assert.IsTrue(actual == output);
        }
    }
}
