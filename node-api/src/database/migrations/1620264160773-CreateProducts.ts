import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProducts1620264160773 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "products",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: "description",
            type: "text"
          },
          {
            name: "image_url",
            type: "varchar"
          },
          {
            name: "slug",
            type: "varchar"
          },
          {
            name: "price",
            type: "int"
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()'
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("products");
  }

}
