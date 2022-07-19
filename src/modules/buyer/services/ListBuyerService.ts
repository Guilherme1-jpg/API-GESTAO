import { getCustomRepository } from 'typeorm';
import Buyer from '../typeorm/entities/Buyer';
import BuyerRepository from '../typeorm/repositories/BuyerRepository';

class ListBuyerService {
    public async execute(): Promise<Buyer[]> {

        const buyerRepository = getCustomRepository(BuyerRepository);

        const buyer = buyerRepository.find();

        return buyer
    }
}

export default ListBuyerService;