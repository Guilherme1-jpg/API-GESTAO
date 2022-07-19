import AppError from '../../../shared/errors/AppError'
import { getCustomRepository } from 'typeorm';
import EventCeremony from '../typeorm/entities/EventCeremony';
import EventCeremonyRepository from '../typeorm/repositories/EventCeremonyRepository';

interface IRequest {
    name: string;
    status: string;
    max_places: number;
    ticket_value: number;
    type_event: string;
    adress: string;
    cep: number;
}

class CreateEventCeremonyService {
    public async execute({ name, status, max_places, ticket_value, type_event, adress, cep }: IRequest): Promise<EventCeremony> {
        const eventRepository = getCustomRepository(EventCeremonyRepository);

        const eventVerify = await eventRepository.findByName(name);

        if (eventVerify) {
            throw new AppError("Sorry, event already created")
        }

        const eventCeremony = eventRepository.create({
            name, status, max_places, ticket_value, type_event, adress, cep
        });

        await eventRepository.save(eventCeremony);

        return eventCeremony;
    }
}

export default CreateEventCeremonyService;