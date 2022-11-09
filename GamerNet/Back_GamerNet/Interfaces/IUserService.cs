using Back_GamerNet.Context;
using Identity_Core.Models;
using Models;

namespace Back_GamerNet.Interfaces
{
    public interface IUserService
    {
        public ContextApplication Context { get; set; }
        /// <summary>
        /// Получение данных пользователя
        /// </summary>
        /// <param name="clientId">Id клиент</param>
        /// <param name="IsWithComputer">Получить данные компьютера пользователя?</param>
        /// <returns></returns>
        public Task<ApplicationUser> GetUser(string clientId, bool IsWithComputer);
    }
}
