using Back_GamerNet.Context;
using Microsoft.AspNetCore.Mvc;
using Models;

namespace Back_GamerNet.Interfaces
{
    public interface IComputerService
    {
        public ContextApplication Context { get; set; }
        public Computer GetComputer(string clientId);
        public Task<Computer> GetComputerAsync(int computerId);
        public Task<bool> ChangeComputer(Computer computer);
        /// <summary>
        /// Метод только для админа
        /// </summary>
        /// <returns></returns>
        public Task<List<Computer>> GetComputers();
        public Task<int> AddComputer(Computer computer);
        public Task<bool> DeleteComputerAsync(int computerId);
    }
}
