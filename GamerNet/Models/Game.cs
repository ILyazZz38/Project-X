namespace Models
{
    public class Game
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public virtual Capture? Capture { get; set; }
        public int? CaptureId { get; set; }
        public string? Description { get; set; }
        public virtual MinRequirement? minRequirement { get; set; }
        public int? minRequirementId { get; set; }
        public virtual MaxRequirement? maxRequirement { get; set; }
        public int? maxRequirementId { get; set; }
        public int ROM { get; set; }
    }
}
