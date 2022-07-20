import { EntityRepository, Repository } from 'typeorm';
import Order from '../entities/Orders';
import Buyer from '../../../buyer/typeorm/entities/Buyer'

interface ITicket {
    price: number;
    quantity: number;
    payment_method: string;
    places: number;
}

interface IRequest {
    buyer: Buyer;
    tickets: ITicket[];
}

@EntityRepository(Order)
class OrderRepository extends Repository<Order> {
    public async findById(id: string): Promise<Order | undefined> {
        const order = this.findOne(id, {
            relations: ['order_tickets', 'buyer'],
        });

        return order;
    }

    public async createOrder({ buyer, tickets }: IRequest): Promise<Order> {
        const order = this.create({
            buyer,
            order_tickets: tickets,
        });

        await this.save(order);

        return order;
    }
}

export default OrderRepository;