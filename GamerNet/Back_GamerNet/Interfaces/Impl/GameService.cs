using Back_GamerNet.Context;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Back_GamerNet.Interfaces.Impl
{
    public class GameService : IGameService
    {
        public ContextApplication Context { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        

        public Game GetGame(int id, bool isWithMin)
        {
            var game = new Game();
            if (isWithMin)
                game = Context.Games
                    .Include(a => a.VideoCard)
                    .Include(a => a.Processor)
                    .FirstOrDefault(a => a.Id == id);
            else
                Context.Games.Find(id);

            if (game == null)
                throw new Exception("Игра не найдена");
            return game;
        }

        public Game GetGame(string name, bool isWithMin)
        {
            var game = new Game();
            if (isWithMin)
                game = Context.Games
                    .Include(a => a.VideoCard)
                    .Include(a => a.Processor)
                    .FirstOrDefault(a => a.Name == name);
            else
                game = Context.Games
                        .FirstOrDefault(a => a.Name == name);
            if (game == null)
                throw new Exception("Игра не найдена");
            return game;
        }

        public List<Game> GetGames()
        {
            return Context.Games.ToList();
        }
    }
}
