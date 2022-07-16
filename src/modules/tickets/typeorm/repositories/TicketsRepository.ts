import { EntityRepository, Repository } from 'typeorm';
import Ticket from '../entities/Ticket';

@EntityRepository(Ticket)
export class TicketRepository extends Repository<Ticket>{

    public async findById(id: string): Promise<Ticket | undefined> {
        const ticket = await this.findOne({
            where: {
                id,
            }
        })
        return ticket;
    }

}