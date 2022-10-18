using Microsoft.EntityFrameworkCore;
using Models;
using System.Reflection.Emit;

namespace GamerNet.Context
{
    public class ApplicationDbContext : DbContext
    {
        DbSet<Computer> Computers { get; set; }
        DbSet<VideoCard> VideoCards { get; set; }
        DbSet<Processor> Processor { get; set; }
        DbSet<Capture> Captures { get; set; }
        DbSet<Category> Categories { get; set; }
        DbSet<Game> Games { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {

            base.OnModelCreating(builder);
        }
    }
}
