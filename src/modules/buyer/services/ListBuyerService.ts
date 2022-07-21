import { inject, injectable } from 'tsyringe'
import { IPaginateBuyer } from '../domain/models/IPaginateBuyer';
import { IBuyerRepository } from '../domain/repositories/IBuyerRepository';

interface Search {
    page: number;
    limit: number;
}

@injectable()
class ListBuyerService {

    constructor(@inject('BuyerRepository') private buyerRepository: IBuyerRepository) { }

    public async execute({ page, limit }: Search): Promise<IPaginateBuyer> {

        const take = limit;
        const skip = (Number(page) - 1) * take;

        const buyer = await this.buyerRepository.findAll({
            page, skip, take
        })

        return buyer;

    }
}

export default ListBuyerService;