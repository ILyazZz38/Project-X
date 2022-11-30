using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Back_GamerNet.Migrations
{
    public partial class change_game_keys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Games_MaxRequirement_maxRequirementId",
                table: "Games");

            migrationBuilder.DropForeignKey(
                name: "FK_Games_MinRequirement_minRequirementId",
                table: "Games");

            migrationBuilder.AlterColumn<int>(
                name: "minRequirementId",
                table: "Games",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "maxRequirementId",
                table: "Games",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

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

            migrationBuilder.AlterColumn<int>(
                name: "minRequirementId",
                table: "Games",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "maxRequirementId",
                table: "Games",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Games_MaxRequirement_maxRequirementId",
                table: "Games",
                column: "maxRequirementId",
                principalTable: "MaxRequirement",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Games_MinRequirement_minRequirementId",
                table: "Games",
                column: "minRequirementId",
                principalTable: "MinRequirement",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
