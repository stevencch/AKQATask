using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AKQATask.Contract.Exceptions
{
    public class InvaildNumberException : Exception
    {
        public InvaildNumberException()
        {
        }

        public InvaildNumberException(string message)
        : base(message)
        {
        }

        public InvaildNumberException(string message, Exception inner)
        : base(message, inner)
        {
        }
    }
}
