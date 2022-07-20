import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddOrderIdToOrdersTicket1658318137776 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'order_ticket', new TableColumn(
                {
                    name: 'order_id',
                    type: 'uuid',
                    isNullable: true,
                },
            )
        );

        await queryRunner.createForeignKey('orders_ticket', new TableForeignKey({
            name: 'OrdersTickets',
            columnNames: [
                'order_id'
            ],
            referencedTableName: 'orders',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('order_ticket', 'OrdersTickets');
        await queryRunner.dropColumn('order_ticket', 'buyer_id');
    }

}
