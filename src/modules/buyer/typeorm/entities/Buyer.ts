import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IBuyer } from '../../../../modules/buyer/domain/models/IBuyer';

@Entity('buyer')
class Buyer implements IBuyer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    document_type: string;

    @Column()
    document_serial: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Buyer;