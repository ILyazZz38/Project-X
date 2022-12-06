using Back_GamerNet.Context;
using Identity_Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Back_GamerNet.Interfaces.Impl
{
    public class UserService : IUserService
    {
        public ContextApplication Context { get; set; }

        public async Task<ApplicationUser> GetUser(string clientId, bool IsWithComputer)
        {
            if(IsWithComputer)
                return Context.Users.Include(a => a.Computer).First(a => a.Id == clientId);
            var _user = await Context.Users.FindAsync(clientId);
            if (_user == null)
                throw new Exception("Пользователь не найден");
            return _user;
        }
    }
}
