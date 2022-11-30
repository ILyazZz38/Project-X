using Models.Enums;

namespace Models
{
    public class Processor
    {
        public int Id { get; set; }
        public string Name { get; set; } = "Default";
        public virtual ManufacturerProcessor Manufacturer { get; set; }
        public int Rank { get; set; } = -1;
    }
}
