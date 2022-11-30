using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Back_GamerNet.Migrations
{
    public partial class Change_requirement_ligic : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MaxRequirementProcessor");

            migrationBuilder.DropTable(
                name: "MaxRequirementVideoCard");

            migrationBuilder.DropTable(
                name: "MinRequirementProcessor");

            migrationBuilder.DropTable(
                name: "MinRequirementVideoCard");

            migrationBuilder.AddColumn<int>(
                name: "FirstCardId",
                table: "MinRequirement",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "FirstProcessorId",
                table: "MinRequirement",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SecondCardId",
                table: "MinRequirement",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SecondProcessorId",
                table: "MinRequirement",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "FirstCardId",
                table: "MaxRequirement",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "FirstProcessorId",
                table: "MaxRequirement",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SecondCardId",
                table: "MaxRequirement",
                type: "integer",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "SecondProcessorId",
                table: "MaxRequirement",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_MinRequirement_FirstCardId",
                table: "MinRequirement",
                column: "FirstCardId");

            migrationBuilder.CreateIndex(
                name: "IX_MinRequirement_FirstProcessorId",
                table: "MinRequirement",
                column: "FirstProcessorId");

            migrationBuilder.CreateIndex(
                name: "IX_MinRequirement_SecondCardId",
                table: "MinRequirement",
                column: "SecondCardId");

            migrationBuilder.CreateIndex(
                name: "IX_MinRequirement_SecondProcessorId",
                table: "MinRequirement",
                column: "SecondProcessorId");

            migrationBuilder.CreateIndex(
                name: "IX_MaxRequirement_FirstCardId",
                table: "MaxRequirement",
                column: "FirstCardId");

            migrationBuilder.CreateIndex(
                name: "IX_MaxRequirement_FirstProcessorId",
                table: "MaxRequirement",
                column: "FirstProcessorId");

            migrationBuilder.CreateIndex(
                name: "IX_MaxRequirement_SecondCardId",
                table: "MaxRequirement",
                column: "SecondCardId");

            migrationBuilder.CreateIndex(
                name: "IX_MaxRequirement_SecondProcessorId",
                table: "MaxRequirement",
                column: "SecondProcessorId");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.DropIndex(
                name: "IX_MinRequirement_FirstCardId",
                table: "MinRequirement");

            migrationBuilder.DropIndex(
                name: "IX_MinRequirement_FirstProcessorId",
                table: "MinRequirement");

            migrationBuilder.DropIndex(
                name: "IX_MinRequirement_SecondCardId",
                table: "MinRequirement");

            migrationBuilder.DropIndex(
                name: "IX_MinRequirement_SecondProcessorId",
                table: "MinRequirement");

            migrationBuilder.DropIndex(
                name: "IX_MaxRequirement_FirstCardId",
                table: "MaxRequirement");

            migrationBuilder.DropIndex(
                name: "IX_MaxRequirement_FirstProcessorId",
                table: "MaxRequirement");

            migrationBuilder.DropIndex(
                name: "IX_MaxRequirement_SecondCardId",
                table: "MaxRequirement");

            migrationBuilder.DropIndex(
                name: "IX_MaxRequirement_SecondProcessorId",
                table: "MaxRequirement");

            migrationBuilder.DropColumn(
                name: "FirstCardId",
                table: "MinRequirement");

            migrationBuilder.DropColumn(
                name: "FirstProcessorId",
                table: "MinRequirement");

            migrationBuilder.DropColumn(
                name: "SecondCardId",
                table: "MinRequirement");

            migrationBuilder.DropColumn(
                name: "SecondProcessorId",
                table: "MinRequirement");

            migrationBuilder.DropColumn(
                name: "FirstCardId",
                table: "MaxRequirement");

            migrationBuilder.DropColumn(
                name: "FirstProcessorId",
                table: "MaxRequirement");

            migrationBuilder.DropColumn(
                name: "SecondCardId",
                table: "MaxRequirement");

            migrationBuilder.DropColumn(
                name: "SecondProcessorId",
                table: "MaxRequirement");

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
        }
    }
}
