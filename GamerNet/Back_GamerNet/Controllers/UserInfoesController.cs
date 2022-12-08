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
    public class UserInfoesController : ControllerBase
    {
        private readonly ContextApplication _context;

        public UserInfoesController(ContextApplication context)
        {
            _context = context;
        }

        // GET: api/UserInfoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserInfo>>> GetUserInfo()
        {
            return await _context.UserInfo.ToListAsync();
        }

        // GET: api/UserInfoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserInfo>> GetUserInfo(int id)
        {
            var userInfo = await _context.UserInfo.FindAsync(id);

            if (userInfo == null)
            {
                return NotFound();
            }

            return userInfo;
        }

        // PUT: api/UserInfoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserInfo(int id, UserInfo userInfo)
        {
            if (id != userInfo.Id)
            {
                return BadRequest();
            }

            _context.Entry(userInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserInfoExists(id))
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

        // POST: api/UserInfoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<UserInfo>> PostUserInfo(UserInfo userInfo)
        {
            _context.UserInfo.Add(userInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUserInfo", new { id = userInfo.Id }, userInfo);
        }

        // DELETE: api/UserInfoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserInfo(int id)
        {
            var userInfo = await _context.UserInfo.FindAsync(id);
            if (userInfo == null)
            {
                return NotFound();
            }

            _context.UserInfo.Remove(userInfo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserInfoExists(int id)
        {
            return _context.UserInfo.Any(e => e.Id == id);
        }
    }
}
