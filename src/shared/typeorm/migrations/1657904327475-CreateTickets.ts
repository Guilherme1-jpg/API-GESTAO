import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTickets1657904327475 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'tickets',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'price',
                    type: 'decimal',
                    precision: 10,
                    scale: 2,
                },
                {
                    name: 'quantity',
                    type: 'int',
                },
                {
                    name: 'payment_method',
                    type: 'varchar'
                },
                {
                    name: 'places',
                    type: 'int',
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
        await queryRunner.dropTable('tickets');
    }

}
