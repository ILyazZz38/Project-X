using Models.Enums;

namespace Models
{
    public class Processor
    {
        public int Id { get; set; }
        public string Name { get; set; } = "Default";
        public ManufacturerProcessor Manufacturer { get; set; }
        public int Rank { get; set; }
        public List<MinRequirement> minRequirements { get; set; }
        public List<MaxRequirement> maxRequirements { get; set; }
    }
}
