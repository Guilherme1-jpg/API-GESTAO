import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateEvents1658247084603 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'events',
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
                    name: 'status',
                    type: 'varchar',
                },
                {
                    name: 'max_places',
                    type: 'int'
                },

                {
                    name: 'ticket_value',
                    type: 'decimal',

                },
                {
                    name: 'type_event',
                    type: 'varchar'
                },
                {
                    name: 'adress',
                    type: 'varchar'
                },
                {
                    name: 'cep',
                    type: 'decimal'
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
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('events')
    }

}
