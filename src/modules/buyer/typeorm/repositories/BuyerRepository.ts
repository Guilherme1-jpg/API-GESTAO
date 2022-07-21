import { IBuyerRepository, Search } from '../../../../modules/buyer/domain/repositories/IBuyerRepository';
import { getRepository, Repository } from 'typeorm';
import Buyer from '../entities/Buyer';
import { ICreateBuyer } from '../../../../modules/buyer/domain/models/ICreateBuyer';
import { IBuyer } from '../../../../modules/buyer/domain/models/IBuyer';
import { IPaginateBuyer } from '../../../../modules/buyer/domain/models/IPaginateBuyer';


class BuyerRepository implements IBuyerRepository {
    private ormRepository: Repository<Buyer>;
    constructor() {
        this.ormRepository = getRepository(Buyer)
    }

    public async remove(buyer: Buyer): Promise<void> {
        await this.ormRepository.remove(buyer);

    }

    public async create({ name, email, document_serial, document_type }: ICreateBuyer): Promise<Buyer> {
        const buyer = this.ormRepository.create({
            name, email, document_serial, document_type
        })

        await this.ormRepository.save(buyer)

        return buyer;
    }

    public async save(buyer: Buyer): Promise<Buyer> {
        await this.ormRepository.save(buyer)

        return buyer;

    }
    public async findAll({ page, skip, take }: Search): Promise<IPaginateBuyer> {

        const [buyer, count] = await this.ormRepository.createQueryBuilder().skip(skip).take(take).getManyAndCount();

        const result = {
            per_page: take,
            total: count,
            current_page: page,
            data: buyer,
        };

        return result;
    }

    public async findById(id: string): Promise<Buyer | undefined> {
        const buyer = await this.ormRepository.findOne({
            where: {
                id,
            },
        })

        return buyer;
    }

    public async findByName(name: string): Promise<Buyer | undefined> {
        const buyer = await this.ormRepository.findOne({
            where: {
                name,
            },
        })

        return buyer;
    }

    public async findByEmail(email: string): Promise<Buyer | undefined> {
        const buyer = await this.ormRepository.findOne({
            where: {
                email,
            },
        })

        return buyer;
    }
}

export default BuyerRepository;