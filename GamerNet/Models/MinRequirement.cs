using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class MinRequirement
    {
        public int Id { get; set; }
        public virtual VideoCard? FirstCard { get; set; }
        public virtual VideoCard? SecondCard { get; set; }
        public virtual Processor? FirstProcessor { get; set; }
        public virtual Processor? SecondProcessor { get; set; }
        public int RAM { get; set; } = 0;
    }
}
