using Identity_Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class FavoriteCategory
    {
        public int Id { get; set; }
        public virtual ApplicationUser? ApplicationUser { get; set; }
        public string? ApplicationUserId { get; set; }
        public virtual Category? Category { get; set; }
        public int? CategoryId { get; set; }
    }
}
