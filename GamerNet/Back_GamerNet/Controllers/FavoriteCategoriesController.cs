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
    public class FavoriteCategoriesController : ControllerBase
    {
        private readonly ContextApplication _context;

        public FavoriteCategoriesController(ContextApplication context)
        {
            _context = context;
        }

        // GET: api/FavoriteCategories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FavoriteCategory>>> GetFavoriteCategory()
        {
            return await _context.FavoriteCategory.ToListAsync();
        }

        // GET: api/FavoriteCategories/5
        [HttpGet("{UserId}")]
        public async Task<ActionResult<IEnumerable<FavoriteCategory>>> GetFavoriteCategory(string UserId)
        {
            var favoriteCategory = await _context.FavoriteCategory.Where(x => x.ApplicationUserId == UserId).ToListAsync();

            if (favoriteCategory == null)
            {
                return NotFound();
            }

            return favoriteCategory;
        }

        // PUT: api/FavoriteCategories/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFavoriteCategory(int id, FavoriteCategory favoriteCategory)
        {
            if (id != favoriteCategory.Id)
            {
                return BadRequest();
            }

            _context.Entry(favoriteCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FavoriteCategoryExists(id))
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

        // POST: api/FavoriteCategories
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FavoriteCategory>> PostFavoriteCategory(FavoriteCategory favoriteCategory)
        {
            _context.FavoriteCategory.Add(favoriteCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFavoriteCategory", new { id = favoriteCategory.Id }, favoriteCategory);
        }

        // DELETE: api/FavoriteCategories/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFavoriteCategory(int id)
        {
            var favoriteCategory = await _context.FavoriteCategory.FindAsync(id);
            if (favoriteCategory == null)
            {
                return NotFound();
            }

            _context.FavoriteCategory.Remove(favoriteCategory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FavoriteCategoryExists(int id)
        {
            return _context.FavoriteCategory.Any(e => e.Id == id);
        }
    }
}
