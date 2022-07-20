import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm'
import Ticket from '../typeorm/entities/Ticket';
import { TicketRepository } from '../typeorm/repositories/TicketsRepository';
import RedisCache from '../../../shared/cache/RedisCache';

interface IRequest {
    price: number;
    quantity: number;
    payment_method: string;
    places: number;
}

class CreateTicketService {
    public async execute({ price, quantity, payment_method, places }: IRequest): Promise<Ticket> {
        const ticketsRepository = getCustomRepository(TicketRepository);

        const redisCache = new RedisCache();

        const ticket = ticketsRepository.create({
            price, quantity, payment_method, places
        })

        await redisCache.invalidate('api-gestao-PROD_LIST')

        await ticketsRepository.save(ticket);

        return ticket;
    }
}

export default CreateTicketService;