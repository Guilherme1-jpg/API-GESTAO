import { getCustomRepository } from 'typeorm';
import EventCeremony from '../typeorm/entities/EventCeremony';
import EventCeremonyRepository from '../typeorm/repositories/EventCeremonyRepository';
import AppError from '../../../shared/errors/AppError'

interface IRequest {
    id: string;
}

class ShowEventCeremonyService {
    public async execute({ id }: IRequest): Promise<EventCeremony> {

        const eventRepository = getCustomRepository(EventCeremonyRepository);

        const eventCeremony = await eventRepository.findById(id);

        if (!eventCeremony) {
            throw new AppError('Event not found')
        }

        return eventCeremony
    }
}

export default ShowEventCeremonyService;