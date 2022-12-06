using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Back_GamerNet.Context;
using Models;

namespace Back_GamerNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryGamesController : ControllerBase
    {
        private readonly ContextApplication _context;

        public CategoryGamesController(ContextApplication context)
        {
            _context = context;
        }

        // GET: api/CategoryGames
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoryGame>>> GetCategoryGames()
        {
            return await _context.CategoryGames.ToListAsync();
        }

        // GET: api/CategoryGames/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CategoryGame>> GetCategoryGame(int id)
        {
            var categoryGame = await _context.CategoryGames.FindAsync(id);

            if (categoryGame == null)
            {
                return NotFound();
            }

            return categoryGame;
        }

        // PUT: api/CategoryGames/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategoryGame(int id, CategoryGame categoryGame)
        {
            if (id != categoryGame.Id)
            {
                return BadRequest();
            }

            _context.Entry(categoryGame).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryGameExists(id))
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

        // POST: api/CategoryGames
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<CategoryGame>> PostCategoryGame(CategoryGame categoryGame)
        {
            _context.CategoryGames.Add(categoryGame);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCategoryGame", new { id = categoryGame.Id }, categoryGame);
        }

        // DELETE: api/CategoryGames/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategoryGame(int id)
        {
            var categoryGame = await _context.CategoryGames.FindAsync(id);
            if (categoryGame == null)
            {
                return NotFound();
            }

            _context.CategoryGames.Remove(categoryGame);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CategoryGameExists(int id)
        {
            return _context.CategoryGames.Any(e => e.Id == id);
        }
    }
}
