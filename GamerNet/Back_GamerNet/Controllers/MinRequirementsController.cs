using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Back_GamerNet.Context;
using Models;
using Models.Enums;

namespace Back_GamerNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MinRequirementsController : ControllerBase
    {
        private readonly ContextApplication _context;

        public MinRequirementsController(ContextApplication context)
        {
            _context = context;
        }

        // GET: api/MinRequirements
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MinRequirement>>> GetMinRequirement()
        {
            return await _context.MinRequirement.ToListAsync();
        }

        // GET: api/MinRequirements/5
        [HttpGet("{id}")]
        public async Task<ActionResult<bool[]>> GetMinRequirement(int id, int cardID, int processorID, int ram)
        {
            bool[] canPlay = { false, false, false };
            var Game = await _context.Games.FindAsync(id);
            VideoCard UserCard = await _context.VideoCards.FindAsync(cardID);
            Processor UserProc = await _context.Processor.FindAsync(processorID);

            Processor FirstProcessor = Game.minRequirement.FirstProcessor;
            Processor SecondProcessor = Game.minRequirement.SecondProcessor;
            VideoCard FirstCard = Game.minRequirement.FirstCard;
            VideoCard SecondCard = Game.minRequirement.SecondCard;

            if (FirstProcessor != null)
                if (UserProc.Rank >= FirstProcessor.Rank)
                    canPlay[0] = true;
            if (SecondProcessor != null)
                if (UserProc.Rank >= SecondProcessor.Rank)
                    canPlay[0] = true;

            if (FirstCard != null)
                if (UserCard.Rank >= FirstCard.Rank)
                    canPlay[1] = true;
            if (SecondCard != null)
                if (UserCard.Rank >= SecondCard.Rank)
                    canPlay[1] = true;

            if (ram >= Game.minRequirement.RAM)
                canPlay[2] = true;
            else
                canPlay[2] = false;

            if (Game.minRequirement == null)
            {
                return NotFound();
            }
            return canPlay;
        }

        // PUT: api/MinRequirements/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMinRequirement(int id, MinRequirement minRequirement)
        {
            if (id != minRequirement.Id)
            {
                return BadRequest();
            }

            _context.Entry(minRequirement).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MinRequirementExists(id))
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

        // POST: api/MinRequirements
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MinRequirement>> PostMinRequirement(MinRequirement minRequirement)
        {
            _context.MinRequirement.Add(minRequirement);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMinRequirement", new { id = minRequirement.Id }, minRequirement);
        }

        // DELETE: api/MinRequirements/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMinRequirement(int id)
        {
            var minRequirement = await _context.MinRequirement.FindAsync(id);
            if (minRequirement == null)
            {
                return NotFound();
            }

            _context.MinRequirement.Remove(minRequirement);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MinRequirementExists(int id)
        {
            return _context.MinRequirement.Any(e => e.Id == id);
        }
    }
}
