using Back_GamerNet.Context;
using Identity_Core.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models;

namespace Back_GamerNet.Interfaces.Impl
{
    public class ComputerService : IComputerService
    {
        IUserService _userService;
        public ComputerService(ContextApplication context, IUserService userService)
        {
            Context = context ?? throw new ArgumentNullException(nameof(context));
            _userService = userService ?? throw new ArgumentNullException(nameof(context));
        }
        public ContextApplication Context { get; set; }

        public async Task<bool> ChangeComputer(Computer computer)
        {
            Context.Entry(computer).State = EntityState.Modified;
            await Context.SaveChangesAsync();
            return true;
        }

        public Computer GetComputer(string clientId)
        {
            var _user = _userService.GetUser(clientId, true).Result;
            if (_user.Computer == null)
                throw new InvalidOperationException("У данного пользователя не добавлены данные пк");
            return _user.Computer;
        }
        public async Task<Computer> GetComputerAsync(int computerId)
        {
            var computer = await Context.Computers.FindAsync(computerId);
            return computer;
        }

        public async Task<List<Computer>> GetComputers()
        {
            return await Context.Computers.ToListAsync();
        }

        public async Task<int> AddComputer(Computer computer)
        {
            Context.Computers.Add(computer);
            return await Context.SaveChangesAsync();
        }

        public async Task<bool> DeleteComputerAsync(int computerId)
        {
            var computer = await Context.Computers.FindAsync(computerId);
            if (computer == null)
            {
                return false;
            }

            Context.Computers.Remove(computer);
            await Context.SaveChangesAsync();

            return true;
        }
    }
}
