import { MigrationInterface, QueryRunner } from "typeorm";

export class DeleteColumn1742204787615 implements MigrationInterface {
    name = 'DeleteColumn1742204787615'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "isActive"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

}
