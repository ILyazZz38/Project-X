using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Back_GamerNet.Migrations
{
    public partial class Change_games : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ROM",
                table: "MinRequirement");

            migrationBuilder.DropColumn(
                name: "ROM",
                table: "MaxRequirement");

            migrationBuilder.DropColumn(
                name: "ROM",
                table: "Computers");

            migrationBuilder.AddColumn<int>(
                name: "ROM",
                table: "Games",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ROM",
                table: "Games");

            migrationBuilder.AddColumn<int>(
                name: "ROM",
                table: "MinRequirement",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ROM",
                table: "MaxRequirement",
                type: "integer",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ROM",
                table: "Computers",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }
    }
}
