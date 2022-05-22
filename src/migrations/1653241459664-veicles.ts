import {MigrationInterface, QueryRunner} from "typeorm";

export class veicles1653241459664 implements MigrationInterface {
    name = 'veicles1653241459664'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "veicle_table" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "plate" character varying NOT NULL, "chassis" character varying(17) NOT NULL, "renavam" integer NOT NULL, "model" character varying NOT NULL, "brand" character varying NOT NULL, "year" date NOT NULL, CONSTRAINT "UQ_9091193da869e9d4c4c0d8cdb2b" UNIQUE ("plate"), CONSTRAINT "PK_46e58d51543e1e9c94284db4326" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "veicle_table"`);
    }

}
