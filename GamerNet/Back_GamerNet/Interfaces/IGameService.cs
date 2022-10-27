using Back_GamerNet.Context;
using Models;

namespace Back_GamerNet.Interfaces
{
    public interface IGameService
    {
        public ContextApplication Context { get; set; }

        public Game GetGame(int id, bool isWithMin);
        public Game GetGame(string name, bool isWithMin);
        public List<Game> GetGames();
    }
}
