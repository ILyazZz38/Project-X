using Back_GamerNet.Context;
using Models;

namespace Back_GamerNet.Interfaces
{
    public interface IComputerService
    {
        public ContextApplication Context { get; set; }
        public Computer GetComputer(string clientId);
        public bool ChangeComputer(Computer computer);
        /// <summary>
        /// Метод только для админа
        /// </summary>
        /// <returns></returns>
        public List<Computer> GetComputers();
    }
}
