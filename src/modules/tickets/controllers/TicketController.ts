import { Request, response, Response } from "express";
import CreateTicketService from "../services/CreateTicketService";
import DeleteTicketService from "../services/DeleteTicketService";
import ListTicketService from "../services/ListTicketService";
import ShowTicketService from "../services/ShowTicketService";
import UpdateTicketService from "../services/UpdateTicketService";

export default class TicketController {

    public async index(req: Request, res: Response): Promise<Response> {

        const listTicket = new ListTicketService();

        const tickets = await listTicket.execute();

        return res.json(tickets);
    }

    public async show(req: Request, res: Response) {
        const { id } = req.params;

        const showTicket = new ShowTicketService();

        const ticket = await showTicket.execute({ id });

        return res.json(ticket);
    }

    public async create(req: Request, res: Response) {
        const { price, quantity, payment_method, places } = req.body;

        const createTicket = new CreateTicketService();

        const ticket = await createTicket.execute({
            price, quantity, payment_method, places
        });

        return res.json(ticket)
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { price, quantity, payment_method, places } = req.body;

        const { id } = req.params;

        const updateTicket = new UpdateTicketService();

        const ticket = await updateTicket.execute({
            id,
            price, quantity, payment_method, places
        });

        return res.json(ticket)
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const deleteTicket = new DeleteTicketService();

        await deleteTicket.execute({ id });

        return res.json([]);
    }

}