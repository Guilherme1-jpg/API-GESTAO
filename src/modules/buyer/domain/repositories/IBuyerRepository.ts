import { ICreateBuyer } from '../models/ICreateBuyer';
import { IBuyer } from '../models/IBuyer';
import { IPaginateBuyer } from '../models/IPaginateBuyer';

export type Search = {
    page: number;
    skip: number;
    take: number;
};

export interface IBuyerRepository {
    findAll({ page, skip, take }: Search): Promise<IPaginateBuyer>
    findByName(name: string): Promise<IBuyer | undefined>;
    findById(id: string): Promise<IBuyer | undefined>;
    findByEmail(email: string): Promise<IBuyer | undefined>;
    create(data: ICreateBuyer): Promise<IBuyer>;
    save(buyer: IBuyer): Promise<IBuyer>;
    remove(buyer: IBuyer): Promise<void>
}