using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class MaxRequirement
    {
        public int Id { get; set; }
        public List<VideoCard> VideoCard { get; set; }
        public List<Processor> Processor { get; set; }
        public int RAM { get; set; }
        public int ROM { get; set; }
    }
}
