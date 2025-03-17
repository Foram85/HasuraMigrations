import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumn1742208293662 implements MigrationInterface {
    name = 'AddColumn1742208293662'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "isActive"`);
    }

}
