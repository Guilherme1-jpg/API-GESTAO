import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddBuyerIdToOrders1658317271231 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'orders', new TableColumn(
                {
                    name: 'buyer_id',
                    type: 'uuid',
                    isNullable: true,
                },
            )
        );

        await queryRunner.createForeignKey('orders', new TableForeignKey({
            name: 'OrdersBuyer',
            columnNames: [
                'buyer_id'
            ],
            referencedTableName: 'buyer',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',

        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('orders', 'OrdersBuyer');
        await queryRunner.dropColumn('orders', 'buyer_id');
    }

}
