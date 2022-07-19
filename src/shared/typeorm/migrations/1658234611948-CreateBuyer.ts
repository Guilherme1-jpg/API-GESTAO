import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateBuyer1658234611948 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'buyer',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'name',
                    type: 'varchar',
                },
                {
                    name: 'email',
                    type: 'varchar',
                },
                {
                    name: 'document_type',
                    type: 'varchar'
                },

                {
                    name: 'document_serial',
                    type: 'decimal',

                },

                {
                    name: 'created_at',
                    type: 'timestamp with time zone',
                    default: 'now()',
                },

                {
                    name: 'updated_at',
                    type: 'timestamp with time zone',
                    default: 'now()',
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('buyer');
    }

}
