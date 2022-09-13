namespace GamerNet.Models
{
    public class Game
    {
        String Name { get; set; }
        int Id { get; set; }
        //Определиться где и как хранить описание
        int CaptureId { get; set; }
        List<Category> Category { get; set; }
    }
}
