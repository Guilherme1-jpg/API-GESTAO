import { EntityRepository, Repository } from 'typeorm';
import Buyer from '../entities/Buyer';

@EntityRepository(Buyer)
class BuyerRepository extends Repository<Buyer>{

    public async findById(id: string): Promise<Buyer | undefined> {
        const buyer = await this.findOne({
            where: {
                id,
            },
        })

        return buyer;
    }

    public async findByName(name: string): Promise<Buyer | undefined> {
        const buyer = await this.findOne({
            where: {
                name,
            },
        })

        return buyer;
    }

    public async findByEmail(email: string): Promise<Buyer | undefined> {
        const buyer = await this.findOne({
            where: {
                email,
            },
        })

        return buyer;
    }
}

export default BuyerRepository;