import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TicketRepository } from '../typeorm/repositories/TicketsRepository';


interface IRequest {
    id: string;
}

class DeleteTicketService {
    public async execute({ id }: IRequest): Promise<void> {
        const ticketsRepository = getCustomRepository(TicketRepository);

        const ticket = await ticketsRepository.findOne(id);

        if (!ticket) {
            throw new AppError('Ticket not found.');
        }

        await ticketsRepository.remove(ticket);
    }
}

export default DeleteTicketService;