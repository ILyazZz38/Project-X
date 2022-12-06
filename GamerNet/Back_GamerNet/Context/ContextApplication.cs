using Identity_Core.Models;
using Microsoft.EntityFrameworkCore;
using Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Back_GamerNet.Context
{
    public class ContextApplication: IdentityDbContext<ApplicationUser>
    {
        public DbSet<Computer> Computers { get; set; }
        public DbSet<VideoCard> VideoCards { get; set; }
        public DbSet<Processor> Processor { get; set; }
        public DbSet<Capture> Captures { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<CategoryGame> CategoryGames { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<MinRequirement> MinRequirement { get; set; }
        public DbSet<MaxRequirement> MaxRequirement { get; set; }
        public ContextApplication(DbContextOptions<ContextApplication> options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder builder)
        {

            base.OnModelCreating(builder);
        }
        public DbSet<Models.FavoriteCategory> FavoriteCategory { get; set; }
    }
}
