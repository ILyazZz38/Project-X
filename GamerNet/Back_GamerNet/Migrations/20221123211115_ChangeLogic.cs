using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Back_GamerNet.Migrations
{
    public partial class ChangeLogic : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Processor_Games_GameId",
                table: "Processor");

            migrationBuilder.DropForeignKey(
                name: "FK_VideoCards_Games_GameId",
                table: "VideoCards");

            migrationBuilder.DropIndex(
                name: "IX_VideoCards_GameId",
                table: "VideoCards");

            migrationBuilder.DropIndex(
                name: "IX_Processor_GameId",
                table: "Processor");

            migrationBuilder.DropColumn(
                name: "ClockFrequency",
                table: "VideoCards");

            migrationBuilder.DropColumn(
                name: "GameId",
                table: "VideoCards");

            migrationBuilder.DropColumn(
                name: "Memory",
                table: "VideoCards");

            migrationBuilder.DropColumn(
                name: "ClockFrequency",
                table: "Processor");

            migrationBuilder.DropColumn(
                name: "CountCors",
                table: "Processor");

            migrationBuilder.DropColumn(
                name: "GameId",
                table: "Processor");

            migrationBuilder.RenameColumn(
                name: "TypeMemory",
                table: "VideoCards",
                newName: "Rank");

            migrationBuilder.RenameColumn(
                name: "CountThreads",
                table: "Processor",
                newName: "Rank");

            migrationBuilder.RenameColumn(
                name: "TypeRAM",
                table: "Computers",
                newName: "ROM");

            migrationBuilder.AddColumn<int>(
                name: "maxRequirementId",
                table: "Games",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "minRequirementId",
                table: "Games",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "MaxRequirement",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    RAM = table.Column<int>(type: "integer", nullable: false),
                    ROM = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaxRequirement", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MinRequirement",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    RAM = table.Column<int>(type: "integer", nullable: false),
                    ROM = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MinRequirement", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MaxRequirementProcessor",
                columns: table => new
                {
                    ProcessorId = table.Column<int>(type: "integer", nullable: false),
                    maxRequirementsId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaxRequirementProcessor", x => new { x.ProcessorId, x.maxRequirementsId });
                    table.ForeignKey(
                        name: "FK_MaxRequirementProcessor_MaxRequirement_maxRequirementsId",
                        column: x => x.maxRequirementsId,
                        principalTable: "MaxRequirement",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MaxRequirementProcessor_Processor_ProcessorId",
                        column: x => x.ProcessorId,
                        principalTable: "Processor",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MaxRequirementVideoCard",
                columns: table => new
                {
                    VideoCardId = table.Column<int>(type: "integer", nullable: false),
                    maxRequirementsId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MaxRequirementVideoCard", x => new { x.VideoCardId, x.maxRequirementsId });
                    table.ForeignKey(
                        name: "FK_MaxRequirementVideoCard_MaxRequirement_maxRequirementsId",
                        column: x => x.maxRequirementsId,
                        principalTable: "MaxRequirement",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MaxRequirementVideoCard_VideoCards_VideoCardId",
                        column: x => x.VideoCardId,
                        principalTable: "VideoCards",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MinRequirementProcessor",
                columns: table => new
                {
                    ProcessorId = table.Column<int>(type: "integer", nullable: false),
                    minRequirementsId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MinRequirementProcessor", x => new { x.ProcessorId, x.minRequirementsId });
                    table.ForeignKey(
                        name: "FK_MinRequirementProcessor_MinRequirement_minRequirementsId",
                        column: x => x.minRequirementsId,
                        principalTable: "MinRequirement",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MinRequirementProcessor_Processor_ProcessorId",
                        column: x => x.ProcessorId,
                        principalTable: "Processor",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MinRequirementVideoCard",
                columns: table => new
                {
                    VideoCardId = table.Column<int>(type: "integer", nullable: false),
                    minRequirementsId = table.Column<int>(type: "integer", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MinRequirementVideoCard", x => new { x.VideoCardId, x.minRequirementsId });
                    table.ForeignKey(
                        name: "FK_MinRequirementVideoCard_MinRequirement_minRequirementsId",
                        column: x => x.minRequirementsId,
                        principalTable: "MinRequirement",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MinRequirementVideoCard_VideoCards_VideoCardId",
                        column: x => x.VideoCardId,
                        principalTable: "VideoCards",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Games_maxRequirementId",
                table: "Games",
                column: "maxRequirementId");

            migrationBuilder.CreateIndex(
                name: "IX_Games_minRequirementId",
                table: "Games",
                column: "minRequirementId");

            migrationBuilder.CreateIndex(
                name: "IX_MaxRequirementProcessor_maxRequirementsId",
                table: "MaxRequirementProcessor",
                column: "maxRequirementsId");

            migrationBuilder.CreateIndex(
                name: "IX_MaxRequirementVideoCard_maxRequirementsId",
                table: "MaxRequirementVideoCard",
                column: "maxRequirementsId");

            migrationBuilder.CreateIndex(
                name: "IX_MinRequirementProcessor_minRequirementsId",
                table: "MinRequirementProcessor",
                column: "minRequirementsId");

            migrationBuilder.CreateIndex(
                name: "IX_MinRequirementVideoCard_minRequirementsId",
                table: "MinRequirementVideoCard",
                column: "minRequirementsId");

            migrationBuilder.AddForeignKey(
                name: "FK_Games_MaxRequirement_maxRequirementId",
                table: "Games",
                column: "maxRequirementId",
                principalTable: "MaxRequirement",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Games_MinRequirement_minRequirementId",
                table: "Games",
                column: "minRequirementId",
                principalTable: "MinRequirement",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Games_MaxRequirement_maxRequirementId",
                table: "Games");

            migrationBuilder.DropForeignKey(
                name: "FK_Games_MinRequirement_minRequirementId",
                table: "Games");

            migrationBuilder.DropTable(
                name: "MaxRequirementProcessor");

            migrationBuilder.DropTable(
                name: "MaxRequirementVideoCard");

            migrationBuilder.DropTable(
                name: "MinRequirementProcessor");

            migrationBuilder.DropTable(
                name: "MinRequirementVideoCard");

            migrationBuilder.DropTable(
                name: "MaxRequirement");

            migrationBuilder.DropTable(
                name: "MinRequirement");

            migrationBuilder.DropIndex(
                name: "IX_Games_maxRequirementId",
                table: "Games");

            migrationBuilder.DropIndex(
                name: "IX_Games_minRequirementId",
                table: "Games");

            migrationBuilder.DropColumn(
                name: "maxRequirementId",
                table: "Games");

            migrationBuilder.DropColumn(
                name: "minRequirementId",
                table: "Games");

            migrationBuilder.RenameColumn(
                name: "Rank",
                table: "VideoCards",
                newName: "TypeMemory");

            migrationBuilder.RenameColumn(
                name: "Rank",
                table: "Processor",
                newName: "CountThreads");

            migrationBuilder.RenameColumn(
                name: "ROM",
                table: "Computers",
                newName: "TypeRAM");

            migrationBuilder.AddColumn<decimal>(
                name: "ClockFrequency",
                table: "VideoCards",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "GameId",
                table: "VideoCards",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Memory",
                table: "VideoCards",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<decimal>(
                name: "ClockFrequency",
                table: "Processor",
                type: "numeric",
                nullable: false,
                defaultValue: 0m);

            migrationBuilder.AddColumn<int>(
                name: "CountCors",
                table: "Processor",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "GameId",
                table: "Processor",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_VideoCards_GameId",
                table: "VideoCards",
                column: "GameId");

            migrationBuilder.CreateIndex(
                name: "IX_Processor_GameId",
                table: "Processor",
                column: "GameId");

            migrationBuilder.AddForeignKey(
                name: "FK_Processor_Games_GameId",
                table: "Processor",
                column: "GameId",
                principalTable: "Games",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_VideoCards_Games_GameId",
                table: "VideoCards",
                column: "GameId",
                principalTable: "Games",
                principalColumn: "Id");
        }
    }
}
