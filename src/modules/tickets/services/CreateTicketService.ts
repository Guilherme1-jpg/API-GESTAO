import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm'
import Ticket from '../typeorm/entities/Ticket';
import { TicketRepository } from '../typeorm/repositories/TicketsRepository';

interface IRequest {
    price: number;
    quantity: number;
    payment_method: string;
    places: number;
}

class CreateTicketService {
    public async execute({ price, quantity, payment_method, places }: IRequest): Promise<Ticket> {
        const ticketsRepository = getCustomRepository(TicketRepository);

        const ticket = ticketsRepository.create({
            price, quantity, payment_method, places
        })

        await ticketsRepository.save(ticket);

        return ticket;
    }
}

export default CreateTicketService;