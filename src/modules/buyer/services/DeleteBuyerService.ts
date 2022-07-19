import AppError from '../../../shared/errors/AppError'
import { getCustomRepository } from 'typeorm';
import BuyerRepository from '../typeorm/repositories/BuyerRepository';

interface IRequest {
    id: string;
}

class DeleteBuyerService {
    public async execute({ id }: IRequest): Promise<void> {
        const buyerRepository = getCustomRepository(BuyerRepository);

        const buyer = await buyerRepository.findById(id);

        if (!buyer) {
            throw new AppError('Customer not found.');
        }

        await buyerRepository.remove(buyer);
    }
}

export default DeleteBuyerService;