import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import EventCeremony from '../typeorm/entities/EventCeremony';
import EventCeremonyRepository from '../typeorm/repositories/EventCeremonyRepository';

interface IRequest {
    id: string;
    name: string;
    status: string;
    max_places: number;
    ticket_value: number;
    type_event: string;
    adress: string;
    cep: number;
}

class UpdateEventCeremonyService {
    public async execute({
        id,
        name,
        status,
        max_places,
        ticket_value,
        type_event,
        adress,
        cep
    }: IRequest): Promise<EventCeremony> {
        const eventRepository = getCustomRepository(EventCeremonyRepository);

        const eventCeremony = await eventRepository.findById(id);

        if (!eventCeremony) {
            throw new AppError('Event not found.');
        }

        eventCeremony.name = name;
        eventCeremony.status = status;
        eventCeremony.type_event = type_event;
        eventCeremony.ticket_value = ticket_value;
        eventCeremony.max_places = max_places;
        eventCeremony.adress = adress;
        eventCeremony.cep = cep;

        await eventRepository.save(eventCeremony);

        return eventCeremony;
    }
}

export default UpdateEventCeremonyService;