import AppError from '../../../shared/errors/AppError';
import { compare, hash } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import Buyer from '../typeorm/entities/Buyer';
import BuyerRepository from '../typeorm/repositories/BuyerRepository';

interface IRequest {
    id: string;
    name: string;
    email: string;
    document_type: string;
    document_serial: number;
}

class UpdateBuyerService {
    public async execute({
        id,
        name,
        email,
        document_type,
        document_serial,
    }: IRequest): Promise<Buyer> {
        const buyerRepository = getCustomRepository(BuyerRepository);

        const buyer = await buyerRepository.findById(id);

        if (!buyer) {
            throw new AppError('User not found.');
        }

        const buyerVerify = await buyerRepository.findByEmail(email);

        if (buyerVerify && email != buyer.email) {
            throw new AppError('There is already one buyer with this email');
        }

        buyer.name = name;
        buyer.email = email;
        buyer.document_type = document_type;
        buyer.document_serial = document_serial;


        await buyerRepository.save(buyer);

        return buyer;
    }
}

export default UpdateBuyerService;