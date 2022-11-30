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
    public class MaxRequirementsController : ControllerBase
    {
        private readonly ContextApplication _context;

        public MaxRequirementsController(ContextApplication context)
        {
            _context = context;
        }

        // GET: api/MaxRequirements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MaxRequirement>>> GetMaxRequirement()
        {
            return await _context.MaxRequirement.ToListAsync();
        }

        // GET: api/MaxRequirements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<bool[]>> GetMaxRequirement(int id, int PCid)
        {
            bool[] canPlay = new bool[3];
            var Game = await _context.Games.FindAsync(id);
            var Computer = await _context.Computers.FindAsync(PCid);

            Processor FirstProcessor = Game.maxRequirement.FirstProcessor;
            Processor SecondProcessor = Game.maxRequirement.SecondProcessor;
            VideoCard FirstCard = Game.maxRequirement.FirstCard;
            VideoCard SecondCard = Game.maxRequirement.SecondCard;

            if (Computer.Processor.Rank >= FirstProcessor.Rank || Computer.Processor.Rank >= SecondProcessor.Rank)
                canPlay[0] = true;
            else
                canPlay[0] = false;
            if (Computer.VideoCard.Rank >= FirstCard.Rank || Computer.VideoCard.Rank >= SecondCard.Rank)
                canPlay[1] = true;
            else
                canPlay[1] = false;
            if (Computer.RAM >= Game.minRequirement.RAM)
                canPlay[2] = true;
            else
                canPlay[2] = false;

            if (Game.minRequirement == null)
            {
                return NotFound();
            }
            return canPlay;
        }

        // PUT: api/MaxRequirements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMaxRequirement(int id, MaxRequirement maxRequirement)
        {
            if (id != maxRequirement.Id)
            {
                return BadRequest();
            }

            _context.Entry(maxRequirement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MaxRequirementExists(id))
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

        // POST: api/MaxRequirements
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MaxRequirement>> PostMaxRequirement(MaxRequirement maxRequirement)
        {
            _context.MaxRequirement.Add(maxRequirement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMaxRequirement", new { id = maxRequirement.Id }, maxRequirement);
        }

        // DELETE: api/MaxRequirements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMaxRequirement(int id)
        {
            var maxRequirement = await _context.MaxRequirement.FindAsync(id);
            if (maxRequirement == null)
            {
                return NotFound();
            }

            _context.MaxRequirement.Remove(maxRequirement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MaxRequirementExists(int id)
        {
            return _context.MaxRequirement.Any(e => e.Id == id);
        }
    }
}
