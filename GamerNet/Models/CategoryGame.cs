using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class CategoryGame
    {
        public int Id { get; set; }
        public virtual Game? Game { get; set; }
        public int? GameId { get; set; }
        public virtual Category? Category { get; set; }
        public int? CategoryId { get; set; }
    }
}
