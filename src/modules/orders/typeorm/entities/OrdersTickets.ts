
import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import Order from './Orders';
import Ticket from '../../../../modules/tickets/typeorm/entities/Ticket';

@Entity('orders_tickets')
class OrderTickets {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Order, order => order.order_tickets)
    @JoinColumn({ name: 'order_id' })
    order: Order;

    @ManyToOne(() => Ticket, ticket => ticket.order_tickets)
    @JoinColumn({ name: 'ticket_id' })
    ticket: Ticket;

    @Column()
    order_id: string;

    @Column()
    ticket_id: string;


    @Column('decimal')
    price: number;

    @Column('int')
    quantity: number;

    @Column()
    payment_method: string;

    @Column('int')
    places: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default OrderTickets;