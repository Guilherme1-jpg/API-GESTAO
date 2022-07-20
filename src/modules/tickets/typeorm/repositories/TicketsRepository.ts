import { EntityRepository, In, Repository } from 'typeorm';
import Ticket from '../entities/Ticket';

interface IFindTickets {
    id: string;
}

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

    public async findAllByIds(tickets: IFindTickets[]): Promise<Ticket[]> {
        const ticketsIds = tickets.map(ticket => ticket.id);

        const existentTickets = await this.find({
            where: {
                id: In(ticketsIds),
            },
        });

        return existentTickets;
    }

}

export default TicketRepository