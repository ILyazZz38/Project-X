using Back_GamerNet.Context;
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

        public bool ChangeComputer(Computer computer)
        {
            var _computer = Context.Computers.Find(computer.Id);
            if (_computer == null)
                return false;
                //throw new ArgumentNullException("Компютер", "Компьютер не найден");
            _computer = computer;
            Context.SaveChanges();
            return true;
        }

        public Computer GetComputer(string clientId)
        {
            var _user = _userService.GetUser(clientId, true);
            if (_user.Computer == null)
                throw new InvalidOperationException("У данного пользователя не добавлены данные пк");
            return _user.Computer;
        }

        public List<Computer> GetComputers()
        {
            var _computers = Context.Computers.ToList();
            return _computers;
        }
    }
}
