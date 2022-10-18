namespace GamerNet.Models
{
    public class Game
    {
        public int Id { get; set; }
        string Name { get; set; }
        //Определиться где и как хранить описание
        int CaptureId { get; set; }
        List<Category> Category { get; set; }
    }
}
