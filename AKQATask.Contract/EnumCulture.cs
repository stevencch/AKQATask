using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AKQATask.Contract
{
    public enum EnumCulture
    {
        [Description("en-US")]
        en_US,
        [Description("en-AU")]
        en_AU,
        [Description("en-GB")]
        en_GB,
        [Description("en")]
        en,
        [Description("fr-FR")]
        fr_FR,
        [Description("fr")]
        fr
    }
}
