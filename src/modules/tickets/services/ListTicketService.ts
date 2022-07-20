import { getCustomRepository } from 'typeorm';
import Ticket from '../typeorm/entities/Ticket';
import { TicketRepository } from '../typeorm/repositories/TicketsRepository';
import RedisCache from '../../../shared/cache/RedisCache';


class ListTicketService {
    public async execute(): Promise<Ticket[]> {
        const ticketsRepository = getCustomRepository(TicketRepository);

        const redisCache = new RedisCache();

        let ticket = await redisCache.recover<Ticket[]>('api-gestao-PROD_LIST');

        if (!ticket) {
            ticket = await ticketsRepository.find();

            await redisCache.save('api-gestao-PROD_LIST', ticket)
        }

        return ticket;
    }
}

export default ListTicketService;