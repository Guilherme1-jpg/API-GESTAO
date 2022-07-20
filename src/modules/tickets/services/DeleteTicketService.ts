import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { TicketRepository } from '../typeorm/repositories/TicketsRepository';
import RedisCache from '../../../shared/cache/RedisCache';

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

        const redisCache = new RedisCache();

        await redisCache.invalidate('api-gestao-PROD_LIST')

        await ticketsRepository.remove(ticket);
    }
}

export default DeleteTicketService;