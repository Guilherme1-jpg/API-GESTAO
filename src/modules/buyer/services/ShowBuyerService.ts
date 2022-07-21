import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Buyer from '../typeorm/entities/Buyer';
import BuyerRepository from '../typeorm/repositories/BuyerRepository';
import { injectable, inject } from 'tsyringe';
import { IShowBuyer } from '../domain/models/IShowBuyer';
import { IBuyerRepository } from '../domain/repositories/IBuyerRepository';



@injectable()
class ShowBuyerService {
    constructor(@inject('BuyerRepository') private buyerRepository: IBuyerRepository) { }

    public async execute({ id }: IShowBuyer): Promise<Buyer> {

        const buyer = await this.buyerRepository.findById(id);

        if (!buyer) {
            throw new AppError('User not found')
        }

        return buyer
    }
}

export default ShowBuyerService;