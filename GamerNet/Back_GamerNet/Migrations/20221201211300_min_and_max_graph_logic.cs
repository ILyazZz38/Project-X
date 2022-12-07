using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Back_GamerNet.Migrations
{
    public partial class min_and_max_graph_logic : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MaxRequirement_Processor_SecondProcessorId",
                table: "MaxRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MaxRequirement_VideoCards_SecondCardId",
                table: "MaxRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MinRequirement_Processor_SecondProcessorId",
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

            migrationBuilder.AddForeignKey(
                name: "FK_MaxRequirement_Processor_SecondProcessorId",
                table: "MaxRequirement",
                column: "SecondProcessorId",
                principalTable: "Processor",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MaxRequirement_VideoCards_SecondCardId",
                table: "MaxRequirement",
                column: "SecondCardId",
                principalTable: "VideoCards",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MinRequirement_Processor_SecondProcessorId",
                table: "MinRequirement",
                column: "SecondProcessorId",
                principalTable: "Processor",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_MinRequirement_VideoCards_SecondCardId",
                table: "MinRequirement",
                column: "SecondCardId",
                principalTable: "VideoCards",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_MaxRequirement_Processor_SecondProcessorId",
                table: "MaxRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MaxRequirement_VideoCards_SecondCardId",
                table: "MaxRequirement");

            migrationBuilder.DropForeignKey(
                name: "FK_MinRequirement_Processor_SecondProcessorId",
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

            migrationBuilder.AddForeignKey(
                name: "FK_MaxRequirement_Processor_SecondProcessorId",
                table: "MaxRequirement",
                column: "SecondProcessorId",
                principalTable: "Processor",
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
                name: "FK_MinRequirement_Processor_SecondProcessorId",
                table: "MinRequirement",
                column: "SecondProcessorId",
                principalTable: "Processor",
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
    }
}
