namespace Models
{
    public class Game
    {
        public string Name { get; set; }
        public int Id { get; set; }
        public Capture? Capture { get; set; }
        public List<Category> Category { get; set; }
        public int Description { get; set; }
        public List<VideoCard> VideoCard { get; set; }
        public List<Processor> Processor { get; set; }
        //List<Review> Review { get; set; }
    }
}
