import { getCustomRepository } from 'typeorm';
import Buyer from '../typeorm/entities/Buyer';
import BuyerRepository from '../typeorm/repositories/BuyerRepository';

interface IPaginate {
    from: number;
    to: number;
    per_page: number;
    total: number;
    current_page: number;
    prev_page: number | null;
    next_page: number | null;
    data: Buyer[];
}

class ListBuyerService {
    public async execute(): Promise<IPaginate> {

        const buyerRepository = getCustomRepository(BuyerRepository);

        const buyer = await buyerRepository.createQueryBuilder().paginate();

        return buyer as IPaginate;
    }
}

export default ListBuyerService;