using Identity_Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class UserInfo
    {
        public int Id { get; set; }
        public virtual ApplicationUser? ApplicationUser { get; set; }
        public string? ApplicationUserId { get; set; }
        public string? photo { get; set; }
        public DateTime? Birthday { get; set; }
        public int? Sex { get; set; }
    }
}
