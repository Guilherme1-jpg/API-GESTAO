import AppError from '../../../shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import EventCeremonyRepository from '../typeorm/repositories/EventCeremonyRepository';

interface IRequest {
    id: string;
}

class DeleteEventCeremonyService {
    public async execute({ id }: IRequest): Promise<void> {
        const eventRepository = getCustomRepository(EventCeremonyRepository);

        const event = await eventRepository.findOne(id);

        if (!event) {
            throw new AppError('Event not found.');
        }

        await eventRepository.remove(event);
    }
}

export default DeleteEventCeremonyService;