using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Back_GamerNet.Migrations
{
    public partial class add_secondary_keys : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Games_MaxRequirement_maxRequirementId",
                table: "Games");

            migrationBuilder.DropForeignKey(
                name: "FK_Games_MinRequirement_minRequirementId",
                table: "Games");

            migrationBuilder.DropForeignKey(
                name: "FK_MaxRequirement_Processor_FirstProcessorId",
                table: "MaxRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MaxRequirement_Processor_SecondProcessorId",
                table: "MaxRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MaxRequirement_VideoCards_FirstCardId",
                table: "MaxRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MaxRequirement_VideoCards_SecondCardId",
                table: "MaxRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MinRequirement_Processor_FirstProcessorId",
                table: "MinRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MinRequirement_Processor_SecondProcessorId",
                table: "MinRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MinRequirement_VideoCards_FirstCardId",
                table: "MinRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MinRequirement_VideoCards_SecondCardId",
                table: "MinRequirement");

            migrationBuilder.AlterColumn<int>(
                name: "SecondProcessorId",
                table: "MinRequirement",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SecondCardId",
                table: "MinRequirement",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "FirstProcessorId",
                table: "MinRequirement",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "FirstCardId",
                table: "MinRequirement",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SecondProcessorId",
                table: "MaxRequirement",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "SecondCardId",
                table: "MaxRequirement",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "FirstProcessorId",
                table: "MaxRequirement",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "FirstCardId",
                table: "MaxRequirement",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

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

            migrationBuilder.AddForeignKey(
                name: "FK_MaxRequirement_Processor_FirstProcessorId",
                table: "MaxRequirement",
                column: "FirstProcessorId",
                principalTable: "Processor",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MaxRequirement_Processor_SecondProcessorId",
                table: "MaxRequirement",
                column: "SecondProcessorId",
                principalTable: "Processor",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MaxRequirement_VideoCards_FirstCardId",
                table: "MaxRequirement",
                column: "FirstCardId",
                principalTable: "VideoCards",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MaxRequirement_VideoCards_SecondCardId",
                table: "MaxRequirement",
                column: "SecondCardId",
                principalTable: "VideoCards",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MinRequirement_Processor_FirstProcessorId",
                table: "MinRequirement",
                column: "FirstProcessorId",
                principalTable: "Processor",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MinRequirement_Processor_SecondProcessorId",
                table: "MinRequirement",
                column: "SecondProcessorId",
                principalTable: "Processor",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MinRequirement_VideoCards_FirstCardId",
                table: "MinRequirement",
                column: "FirstCardId",
                principalTable: "VideoCards",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MinRequirement_VideoCards_SecondCardId",
                table: "MinRequirement",
                column: "SecondCardId",
                principalTable: "VideoCards",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Games_MaxRequirement_maxRequirementId",
                table: "Games");

            migrationBuilder.DropForeignKey(
                name: "FK_Games_MinRequirement_minRequirementId",
                table: "Games");

            migrationBuilder.DropForeignKey(
                name: "FK_MaxRequirement_Processor_FirstProcessorId",
                table: "MaxRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MaxRequirement_Processor_SecondProcessorId",
                table: "MaxRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MaxRequirement_VideoCards_FirstCardId",
                table: "MaxRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MaxRequirement_VideoCards_SecondCardId",
                table: "MaxRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MinRequirement_Processor_FirstProcessorId",
                table: "MinRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MinRequirement_Processor_SecondProcessorId",
                table: "MinRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MinRequirement_VideoCards_FirstCardId",
                table: "MinRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MinRequirement_VideoCards_SecondCardId",
                table: "MinRequirement");

            migrationBuilder.AlterColumn<int>(
                name: "SecondProcessorId",
                table: "MinRequirement",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "SecondCardId",
                table: "MinRequirement",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "FirstProcessorId",
                table: "MinRequirement",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "FirstCardId",
                table: "MinRequirement",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "SecondProcessorId",
                table: "MaxRequirement",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "SecondCardId",
                table: "MaxRequirement",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "FirstProcessorId",
                table: "MaxRequirement",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<int>(
                name: "FirstCardId",
                table: "MaxRequirement",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

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

            migrationBuilder.AddForeignKey(
                name: "FK_MaxRequirement_Processor_FirstProcessorId",
                table: "MaxRequirement",
                column: "FirstProcessorId",
                principalTable: "Processor",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MaxRequirement_Processor_SecondProcessorId",
                table: "MaxRequirement",
                column: "SecondProcessorId",
                principalTable: "Processor",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MaxRequirement_VideoCards_FirstCardId",
                table: "MaxRequirement",
                column: "FirstCardId",
                principalTable: "VideoCards",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MaxRequirement_VideoCards_SecondCardId",
                table: "MaxRequirement",
                column: "SecondCardId",
                principalTable: "VideoCards",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MinRequirement_Processor_FirstProcessorId",
                table: "MinRequirement",
                column: "FirstProcessorId",
                principalTable: "Processor",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MinRequirement_Processor_SecondProcessorId",
                table: "MinRequirement",
                column: "SecondProcessorId",
                principalTable: "Processor",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MinRequirement_VideoCards_FirstCardId",
                table: "MinRequirement",
                column: "FirstCardId",
                principalTable: "VideoCards",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MinRequirement_VideoCards_SecondCardId",
                table: "MinRequirement",
                column: "SecondCardId",
                principalTable: "VideoCards",
                principalColumn: "Id");
        }
    }
}
