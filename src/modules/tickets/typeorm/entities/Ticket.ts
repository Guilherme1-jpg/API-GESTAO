import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import OrderTickets from '../../../../modules/orders/typeorm/entities/OrdersTickets';

@Entity('tickets')
class Ticket {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @OneToMany(() => OrderTickets, order_tickets => order_tickets.ticket)
    order_tickets: OrderTickets[];

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

export default Ticket;