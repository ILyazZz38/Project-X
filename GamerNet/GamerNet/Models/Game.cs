namespace GamerNet.Models
{
    public class Game
    {
        public String Name { get; set; }
        public int Id { get; set; }
        public int CaptureId { get; set; }
        public List<Category> Category { get; set; }
        public int Description { get; set; }
        //List<GraphicsCard> GraphicsCard { get; set; }
        //List<Processor> Processor { get; set; }
        //List<Review> Review { get; set; }
    }
}
