using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Back_GamerNet.Context;
using Models;
using Models.Back_GamerNet.Interfaces;

namespace Back_GamerNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesSearchController : ControllerBase
    {
        private readonly ContextApplication _context;

        public GamesSearchController(ContextApplication context)
        {
            _context = context;
        }

        // GET: api/GamesSearch
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Game>>> GetGames(string? name, [FromQuery] int[]? categories, [FromQuery] PaginateParameters paginateParameters)
        {
            List<Game> games = new List<Game>();
            if (categories != null)
            {
                List<CategoryGame> categoryGames = new List<CategoryGame>();
                for (int i = 0; i < categories.Length; i++)
                {
                    List<CategoryGame> cg = _context.CategoryGames.Where(x => x.CategoryId == categories[i]).ToList();
                    foreach (CategoryGame categoryGame in cg)
                    {
                        categoryGames.Add(categoryGame);
                    }
                }
                CategoryGame[] cgames = categoryGames.ToArray();
                for (int i = 0; i < cgames.Length; i++)
                {
                    List<Game> g = _context.Games.Where(x => x.Id == cgames[i].GameId).ToList();
                    foreach (Game game in g)
                    {
                        games.Add(game);
                    }
                }
            }
            if(name != null)
            {
                if (games.Count > 0)
                {
                    List<Game> game = games.Where(x => x.Name.ToLower().Contains(name.ToLower())).ToList();
                    games.Clear();
                    games = game;
                }
                else
                {
                    games = _context.Games.Where(x => x.Name.ToLower().Contains(name.ToLower())).ToList();
                }
            }
            
            return games.Skip((paginateParameters.PageNumber - 1) * paginateParameters.PageSize)
                .Take(paginateParameters.PageSize)
                .ToList();
        }

        private bool GameExists(int id)
        {
            return _context.Games.Any(e => e.Id == id);
        }
    }
}
