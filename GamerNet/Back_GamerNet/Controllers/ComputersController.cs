using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Back_GamerNet.Context;
using Models;
using Back_GamerNet.Interfaces;

namespace Back_GamerNet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComputersController : ControllerBase
    {
        private readonly ContextApplication _context;
        private readonly IComputerService service;

        public ComputersController(ContextApplication context, IComputerService computerService)
        {
            _context = context;
            service = computerService;
        }

        /// <summary>
        /// GET: api/Computers 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Computer>>> GetComputers()
        {
            return await service.GetComputers();
        }

        // GET: api/Computers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Computer>> GetComputer(int id)
        {
            var computer = await service.GetComputerAsync(id);

            if (computer == null)
            {
                return NotFound();
            }

            return computer;
        }

        // PUT: api/Computers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> ChangeComputer(int id, Computer computer)
        {
            if (id != computer.Id)
            {
                return BadRequest();
            }
            
            try
            {
                await service.ChangeComputer(computer);
            }
            catch (DbUpdateConcurrencyException)
            {

                if (!ComputerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            return Ok();
        }

        // POST: api/Computers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Computer>> AddComputer(Computer computer)
        {
            int count = await service.AddComputer(computer);
            if (count > 0)
                return CreatedAtAction("AddComputer", new { id = computer.Id }, computer);
            else
                return Problem();

        }

        // DELETE: api/Computers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteComputer(int id)
        {
            var isDelete = await service.DeleteComputerAsync(id);
            if (!isDelete)
            {
                return NotFound();
            }


            return NoContent();
        }

        private bool ComputerExists(int id)
        {
            return _context.Computers.Any(e => e.Id == id);
        }
    }
}
