import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Buyer from '../typeorm/entities/Buyer';
import BuyerRepository from '../typeorm/repositories/BuyerRepository';

interface IRequest {
    id: string;
}

class ShowBuyerService {
    public async execute({ id }: IRequest): Promise<Buyer> {

        const buyerRepository = getCustomRepository(BuyerRepository);

        const buyer = await buyerRepository.findById(id);

        if (!buyer) {
            throw new AppError('User not found')
        }

        return buyer
    }
}

export default ShowBuyerService;