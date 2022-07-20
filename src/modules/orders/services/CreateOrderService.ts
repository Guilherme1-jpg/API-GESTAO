import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm'
import Order from '../typeorm/entities/Orders';
import OrderRepository from '../typeorm/repositories/OrderRepository';
import BuyerRepository from '../../../modules/buyer/typeorm/repositories/BuyerRepository';
import TicketRepository from '../../../modules/tickets/typeorm/repositories/TicketsRepository';

interface ITickets {
    id: string;
    quantity: number;
    payment_method: string;
    places: number;
}

interface IRequest {
    buyer_id: string;
    tickets: ITickets[]
}

class CreateOrderService {
    public async execute({ buyer_id, tickets }: IRequest): Promise<Order> {
        const ordersRepository = getCustomRepository(OrderRepository);
        const buyerRepository = getCustomRepository(BuyerRepository);
        const ticketRepository = getCustomRepository(TicketRepository)

        const buyerExist = await buyerRepository.findById(buyer_id);

        if (!buyerExist) {
            throw new AppError('Buyer not found');
        }

        const existTickets = await ticketRepository.findAllByIds(tickets);

        if (!existTickets.length) {
            throw new AppError('looks like we didnt find some tickets')
        }

        const existTicketsId = existTickets.map((ticket) => ticket.id);

        const checkedTicketsVoids = tickets.filter(
            ticket => !existTicketsId.includes(ticket.id)
        );

        if (checkedTicketsVoids.length) {
            throw new AppError(`Could not find Ticket ${checkedTicketsVoids[0].id}`)
        }

        //runs through each ticket in the matrix and gets the amount
        const quantityInventory = tickets.filter(
            ticket => existTickets.filter(
                tk => tk.id === ticket.id
            )[0].quantity < ticket.quantity
        )

        if (quantityInventory.length) {
            throw new AppError('we cant meet the demand')
        }

        const serializedTickets = tickets.map(ticket => ({
            ticket_id: ticket.id,
            quantity: ticket.quantity,
            payment_method: ticket.payment_method,
            places: ticket.places,
            price: existTickets.filter(p => p.id === ticket.id)[0].price,
        }));

        const order = await ordersRepository.createOrder({
            buyer: buyerExist,
            tickets: serializedTickets,
        });

        const { order_tickets } = order;

        const updatedTicketQuantity = order_tickets.map(ticket => ({
            id: ticket.ticket_id,
            quantity:
                existTickets.filter(p => p.id === ticket.ticket_id)[0].quantity -
                ticket.quantity,
        }));

        await ticketRepository.save(updatedTicketQuantity);

        return order;

    }
}

export default CreateOrderService;