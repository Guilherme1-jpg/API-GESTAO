import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('tickets')
class Ticket {
    @PrimaryGeneratedColumn('uuid')
    id: string;

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