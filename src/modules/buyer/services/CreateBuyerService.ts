import AppError from '../../../shared/errors/AppError'
import { getCustomRepository } from 'typeorm';
import Buyer from '../typeorm/entities/Buyer';
import BuyerRepository from '../typeorm/repositories/BuyerRepository';


interface IRequest {
    name: string;
    email: string;
    document_type: string;
    document_serial: number;
}

class CreateBuyerService {
    public async execute({ name, email, document_type, document_serial }: IRequest): Promise<Buyer> {
        const buyerRepository = getCustomRepository(BuyerRepository);
        const emailVerify = await buyerRepository.findByEmail(email);

        if (emailVerify) {
            throw new AppError("Sorry, email already used")
        }

        const buyer = buyerRepository.create({
            name, email, document_type, document_serial
        });

        await buyerRepository.save(buyer);

        return buyer;
    }
}

export default CreateBuyerService;