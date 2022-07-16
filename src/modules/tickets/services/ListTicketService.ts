import { getCustomRepository } from 'typeorm';
import Ticket from '../typeorm/entities/Ticket';
import { TicketRepository } from '../typeorm/repositories/TicketsRepository';


class ListTicketService {
    public async execute(): Promise<Ticket[]> {
        const ticketsRepository = getCustomRepository(TicketRepository);

        const ticket = ticketsRepository.find();

        return ticket;
    }
}

export default ListTicketService;