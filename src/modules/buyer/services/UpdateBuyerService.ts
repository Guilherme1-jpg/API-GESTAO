import AppError from '../../../shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import Buyer from '../typeorm/entities/Buyer';
import BuyerRepository from '../typeorm/repositories/BuyerRepository';
import { injectable, inject } from 'tsyringe';
import { IBuyerRepository } from '../domain/repositories/IBuyerRepository';
import { IUpdateBuyer } from '../domain/models/IUpdate';

@injectable()
class UpdateBuyerService {
    constructor(@inject('BuyerRepository') private buyerRepository: IBuyerRepository) { }

    public async execute({
        id,
        name,
        email,
        document_type,
        document_serial,
    }: IUpdateBuyer): Promise<Buyer> {

        const buyer = await this.buyerRepository.findById(id);

        if (!buyer) {
            throw new AppError('User not found.');
        }

        const buyerVerify = await this.buyerRepository.findByEmail(email);

        if (buyerVerify && email != buyer.email) {
            throw new AppError('There is already one buyer with this email');
        }

        buyer.name = name;
        buyer.email = email;
        buyer.document_type = document_type;
        buyer.document_serial = document_serial;


        await this.buyerRepository.save(buyer);

        return buyer;
    }
}

export default UpdateBuyerService;