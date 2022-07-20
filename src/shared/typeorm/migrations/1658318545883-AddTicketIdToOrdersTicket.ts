import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddTicketIdToOrdersTicket1658318545883 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'order_ticket', new TableColumn(
                {
                    name: 'ticket_id',
                    type: 'uuid',
                    isNullable: true,
                },
            )
        );

        await queryRunner.createForeignKey('orders_ticket', new TableForeignKey({
            name: 'OrdersTicketsTicket',
            columnNames: [
                'ticket_id'
            ],
            referencedTableName: 'ticket_id',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('order_ticket', 'OrdersTicketsTicket');
        await queryRunner.dropColumn('order_ticket', 'ticket_id');
    }

}
