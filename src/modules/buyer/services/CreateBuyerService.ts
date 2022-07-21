import AppError from '../../../shared/errors/AppError'
import { IBuyerRepository } from '../domain/repositories/IBuyerRepository';
import { ICreateBuyer } from '../domain/models/ICreateBuyer';
import { IBuyer } from '../domain/models/IBuyer';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateBuyerService {

    constructor(@inject('BuyerRepository') private buyerRepository: IBuyerRepository) { }

    public async execute({ name, email, document_type, document_serial }: ICreateBuyer): Promise<IBuyer> {

        const emailVerify = await this.buyerRepository.findByEmail(email);

        if (emailVerify) {
            throw new AppError("Sorry, email already used")
        }

        const buyer = await this.buyerRepository.create({
            name, email, document_type, document_serial
        });

        return buyer;
    }
}

export default CreateBuyerService;