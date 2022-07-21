import AppError from '../../../shared/errors/AppError'
import { getCustomRepository } from 'typeorm';
import BuyerRepository from '../typeorm/repositories/BuyerRepository';
import { IDeleteBuyer } from '../domain/models/IDeleteBuyer';
import { IBuyerRepository } from '../domain/repositories/IBuyerRepository';
import { inject, injectable } from 'tsyringe';

@injectable()
class DeleteBuyerService {
    constructor(@inject('BuyerRepository') private buyerRepository: IBuyerRepository) { }

    public async execute({ id }: IDeleteBuyer): Promise<void> {

        const buyer = await this.buyerRepository.findById(id);

        if (!buyer) {
            throw new AppError('Customer not found.');
        }

        await this.buyerRepository.remove(buyer);
    }
}

export default DeleteBuyerService;