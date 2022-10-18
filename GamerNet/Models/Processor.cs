using Models.Enums;

namespace Models
{
    public class Processor
    {
        public int Id { get; set; }
        public string Name { get; set; } = "Default";
        public decimal ClockFrequency { get; set; }
        public int CountCors { get; set; } = 0;
        public int CountThreads { get; set; }
        public ManufacturerProcessor Manufacturer { get; set; }
    }
}
