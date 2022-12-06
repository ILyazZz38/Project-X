using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Back_GamerNet.Migrations
{
    public partial class ChangeMinReqGame : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "GameId",
                table: "VideoCards",
                type: "integer",
                nullable: true);

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

        protected override void Down(MigrationBuilder migrationBuilder)
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
                name: "GameId",
                table: "VideoCards");

            migrationBuilder.DropColumn(
                name: "GameId",
                table: "Processor");
        }
    }
}
