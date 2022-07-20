import {
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import Buyer from '../../../buyer/typeorm/entities/Buyer';
import OrderTickets from './OrdersTickets';

@Entity('orders')
class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Buyer)
    @JoinColumn({ name: 'buyer_id' })
    buyer: Buyer;

    @OneToMany(() => OrderTickets, order_tickets => order_tickets.order, {
        cascade: true,
    })
    order_tickets: OrderTickets[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Order;