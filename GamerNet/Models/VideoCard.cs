using Models.Enums;

namespace Models
{
    public class VideoCard
    {
        public int Id { get; set; }
        public string Name { get; set; } = "Default";
        public int Memory { get; set; }
        public decimal ClockFrequency { get; set; }
        public ManufacturerVideoCard Manufacturer { get; set; }
        public TypeRAM TypeMemory { get; set; }
    }
}
