using Back_GamerNet.Context;
using Identity_Core.Models;
using Models;

namespace Back_GamerNet.Interfaces
{
    public interface IUserService
    {
        public ContextApplication Context { get; set; }
        public ApplicationUser GetUser(string clientId, bool IsWithComputer);
    }
}
