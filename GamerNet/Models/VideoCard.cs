using Models.Enums;

namespace Models
{
    public class VideoCard
    {
        public int Id { get; set; }
        public string Name { get; set; } = "Default";
        public int Rank { get; set; }
        public ManufacturerVideoCard Manufacturer { get; set; }
        public List<MinRequirement> minRequirements { get; set; }
        public List<MaxRequirement> maxRequirements { get; set; }
    }
}
