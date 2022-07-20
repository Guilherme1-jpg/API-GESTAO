import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Ticket from '../typeorm/entities/Ticket';
import { TicketRepository } from '../typeorm/repositories/TicketsRepository';
import RedisCache from '../../../shared/cache/RedisCache';

interface IRequest {
    id: string;
    price: number;
    quantity: number;
    payment_method: string;
    places: number;
}

class UpdateTicketService {
    public async execute({
        id,
        price,
        quantity,
        payment_method,
        places
    }: IRequest): Promise<Ticket> {
        const ticketsRepository = getCustomRepository(TicketRepository);

        const ticket = await ticketsRepository.findById(id);

        if (!ticket) {
            throw new AppError('Ticket not found.');
        }

        const redisCache = new RedisCache();
        await redisCache.invalidate('api-gestao-PROD_LIST')

        ticket.price = price;
        ticket.quantity = quantity;
        ticket.places = places;
        ticket.payment_method = payment_method;

        await ticketsRepository.save(ticket);

        return ticket;
    }
}

export default UpdateTicketService;