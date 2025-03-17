import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddNewColumn1742195301803 implements MigrationInterface {
  name = 'AddNewColumn1742195301803';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "customer" ADD "isActive" boolean NOT NULL DEFAULT true`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "isActive"`);
  }
}
