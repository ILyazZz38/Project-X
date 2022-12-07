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
using Microsoft.AspNetCore.Authorization;

namespace Back_GamerNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        private readonly ContextApplication _context;

        public GamesController(ContextApplication context)
        {
            _context = context;
        }


        // GET: api/Games
        [HttpGet]
        public async Task<IEnumerable<Game>> GetGames([FromQuery] PaginateParameters paginateParameters)
        {
            return _context.Games.ToList()
                .Skip((paginateParameters.PageNumber - 1) * paginateParameters.PageSize)
                .Take(paginateParameters.PageSize)
                .ToList();
        }

        //// GET: api/FindGame
        //[HttpGet]
        //public async Task<IEnumerable<Game>> FindGames(int?[] category, string name)
        //{
        //    var games = _context.Games.Where(x => x.Name.Contains(name)).ToList();
        //    return games;
        //}

        //// GET: api/Games
        //[HttpGet]
        //public async Task<IEnumerable<Game>> RecomendGames(string UserId)
        //{
        //    FavoriteCategory[] favoriteCategories = _context.FavoriteCategory.Where(x => x.ApplicationUserId == UserId).ToArray();
        //    CategoryGame[] categoryGames = new CategoryGame[1];
        //    for (int i = 0; i <= favoriteCategories.Length; i++)
        //    {
        //        categoryGames[i] = _context.CategoryGames.Where(x => x.CategoryId == favoriteCategories[i].CategoryId)
        //    }
        //    return await _context.Games.Where(x => x.).ToListAsync();
        //}

        // GET: api/Games/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Game>> GetGame(int id)
        {
            var game = await _context.Games.FindAsync(id);

            if (game == null)
            {
                return NotFound();
            }

            return game;
        }

        // PUT: api/Games/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGame(int id, Game game)
        {
            if (id != game.Id)
            {
                return BadRequest();
            }

            _context.Entry(game).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Games
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Game>> PostGame(Game game)
        {
            _context.Games.Add(game);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGame", new { id = game.Id }, game);
        }

        // DELETE: api/Games/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGame(int id)
        {
            var game = await _context.Games.FindAsync(id);
            if (game == null)
            {
                return NotFound();
            }

            _context.Games.Remove(game);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GameExists(int id)
        {
            return _context.Games.Any(e => e.Id == id);
        }
    }
}
