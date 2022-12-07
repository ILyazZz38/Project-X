using Models.Enums;

namespace Models
{
    public class VideoCard
    {
        public int Id { get; set; }
        public string Name { get; set; } = "Default";
        public int Rank { get; set; } = -1;
        public virtual ManufacturerVideoCard Manufacturer { get; set; }
    }
}
