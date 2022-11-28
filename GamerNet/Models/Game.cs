namespace Models
{
    public class Game
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public Capture? Capture { get; set; }
        public List<Category> Category { get; set; }
        public int Description { get; set; }
        public MinRequirement? minRequirement { get; set; }
        public MaxRequirement? maxRequirement { get; set; }
        public int ROM { get; set; }
    }
}
