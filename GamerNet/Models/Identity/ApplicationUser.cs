using Microsoft.AspNetCore.Identity;
using Models;

namespace Identity_Core.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? photo { get; set; }
        public DateTime? Birthday { get; set; }
        public int? Sex { get; set; }
        public virtual Computer? Computer { get; set; }
        public int? ComputerId { get; set; }
    }
}
