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
using System.Collections;

namespace Back_GamerNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesFavoriteController : ControllerBase
    {
        private readonly ContextApplication _context;

        public GamesFavoriteController(ContextApplication context)
        {
            _context = context;
        }

        // GET: api/GamesFavorite
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Game>>> GamesFavorite(string? userID, [FromQuery] PaginateParameters paginateParameters)
        {
            var games = new List<Game>();
            FavoriteCategory[] favoriteCategories = _context.FavoriteCategory.Where(x => x.ApplicationUserId == userID).ToArray();
            List<CategoryGame> categoryGames = new List<CategoryGame>();
            for (int i = 0; i < favoriteCategories.Length; i++)
            {
                List<CategoryGame> cg = _context.CategoryGames.Where(x => x.CategoryId == favoriteCategories[i].CategoryId).ToList();
                foreach (CategoryGame categoryGame in cg)
                {
                    if (categoryGames.Any(item => item.GameId == categoryGame.GameId))
                    {
                        
                    }
                    else
                    {
                        categoryGames.Add(categoryGame);
                    }
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
