import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Ticket from '../typeorm/entities/Ticket';
import { TicketRepository } from '../typeorm/repositories/TicketsRepository';


interface IRequest {
    id: string;
}

class ShowTicketService {
    public async execute({ id }: IRequest): Promise<Ticket> {
        const ticketsRepository = getCustomRepository(TicketRepository);

        const ticket = await ticketsRepository.findOne(id);

        if (!ticket) {
            throw new AppError('Ticket is not found.');
        }

        return ticket;
    }
}

export default ShowTicketService;