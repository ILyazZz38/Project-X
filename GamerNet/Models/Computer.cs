using Identity_Core.Models;
using Models.Enums;

namespace Models
{
    public class Computer
    {
        public int Id { get; set; }
        public Processor? Processor { get; set; }
        public int ProcessorId { get; set; }
        public VideoCard? VideoCard { get; set; }
        public int? VideoCardId { get; set; }
        public int RAM { get; set; } = 0;
    }
}
