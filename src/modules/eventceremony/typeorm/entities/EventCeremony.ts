import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('events')
class EventCeremony {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    status: string;

    @Column('decimal')
    ticket_value: number;

    @Column('int')
    max_places: number;

    @Column()
    type_event: string;

    @Column()
    adress: string;

    @Column('decimal')
    cep: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default EventCeremony;