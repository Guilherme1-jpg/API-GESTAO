import { Request, Response } from "express";
import ListEventCeremonyService from "../services/ListEventCeremonyService";
import CreateEventCeremonyService from "../services/CreateEventCeremonyService";
import ShowEventCeremonyService from "../services/ShowEventCeremonyService";
import UpdateEventCeremonyService from "../services/UpdateEventCeremonyService";
import DeleteEventCeremonyService from "../services/DeleteEventCeremony";

export default class EventController {

    public async index(req: Request, res: Response): Promise<Response> {

        const listEvent = new ListEventCeremonyService();

        const event = await listEvent.execute();

        return res.json(event);
    }

    public async show(req: Request, res: Response) {
        const { id } = req.params;

        const showEvent = new ShowEventCeremonyService();

        const event = await showEvent.execute({ id });

        return res.json(event);
    }

    public async create(req: Request, res: Response) {
        const { name, status, max_places, ticket_value, type_event, adress, cep } = req.body;

        const createEvent = new CreateEventCeremonyService();

        const event = await createEvent.execute({
            name, status, max_places, ticket_value, type_event, adress, cep
        });

        return res.json(event)
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { name, status, max_places, ticket_value, type_event, adress, cep } = req.body;

        const { id } = req.params;

        const updateEvent = new UpdateEventCeremonyService();

        const event = await updateEvent.execute({
            id,
            name, status, max_places, ticket_value, type_event, adress, cep
        });

        return res.json(event)
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;

        const deleteEvent = new DeleteEventCeremonyService();

        await deleteEvent.execute({ id });

        return res.json([]);
    }

}