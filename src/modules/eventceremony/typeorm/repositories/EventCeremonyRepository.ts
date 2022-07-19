import { EntityRepository, Repository } from 'typeorm';
import EventCeremony from '../entities/EventCeremony';

@EntityRepository(EventCeremony)
class EventCeremonyRepository extends Repository<EventCeremony>{

    public async findById(id: string): Promise<EventCeremony | undefined> {
        const eventCeremony = await this.findOne({
            where: {
                id,
            },
        })

        return eventCeremony;
    }

    public async findByName(name: string): Promise<EventCeremony | undefined> {
        const eventCeremony = await this.findOne({
            where: {
                name,
            },
        })

        return eventCeremony;
    }

    public async findByAdress(adress: string): Promise<EventCeremony | undefined> {
        const eventCeremony = await this.findOne({
            where: {
                adress,
            },
        })

        return eventCeremony;
    }


}

export default EventCeremonyRepository;