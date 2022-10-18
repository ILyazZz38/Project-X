using Microsoft.AspNetCore.Identity;
using Models;

namespace Identity_Core.Models
{
    public class ApplicationUser : IdentityUser
    {
        public Computer? Computer { get; set; }
        public int? ComputerId { get; set; }
    }
}
