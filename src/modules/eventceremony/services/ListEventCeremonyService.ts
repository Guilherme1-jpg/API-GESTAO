import { getCustomRepository } from 'typeorm';
import EventCeremony from '../typeorm/entities/EventCeremony';
import EventCeremonyRepository from '../typeorm/repositories/EventCeremonyRepository';

class ListEventCeremonyService {
    public async execute(): Promise<EventCeremony[]> {

        const eventRepository = getCustomRepository(EventCeremonyRepository);

        const event = eventRepository.find();

        return event;
    }
}

export default ListEventCeremonyService;