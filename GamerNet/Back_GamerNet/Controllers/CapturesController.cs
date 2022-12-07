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
    public class CapturesController : ControllerBase
    {
        private readonly ContextApplication _context;

        public CapturesController(ContextApplication context)
        {
            _context = context;
        }

        // GET: api/Captures
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Capture>>> GetCaptures()
        {
            return await _context.Captures.ToListAsync();
        }

        // GET: api/Captures/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Capture>> GetCapture(int id)
        {
            var capture = await _context.Captures.FindAsync(id);

            if (capture == null)
            {
                return NotFound();
            }

            return capture;
        }

        // PUT: api/Captures/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCapture(int id, Capture capture)
        {
            if (id != capture.Id)
            {
                return BadRequest();
            }

            _context.Entry(capture).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CaptureExists(id))
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

        // POST: api/Captures
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Capture>> PostCapture(Capture capture)
        {
            _context.Captures.Add(capture);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCapture", new { id = capture.Id }, capture);
        }

        // DELETE: api/Captures/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCapture(int id)
        {
            var capture = await _context.Captures.FindAsync(id);
            if (capture == null)
            {
                return NotFound();
            }

            _context.Captures.Remove(capture);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CaptureExists(int id)
        {
            return _context.Captures.Any(e => e.Id == id);
        }
    }
}
