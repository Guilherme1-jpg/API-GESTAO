import { container } from 'tsyringe';

import { IBuyerRepository } from '../../modules/buyer/domain/repositories/IBuyerRepository';
import BuyerRepository from '../../modules/buyer/typeorm/repositories/BuyerRepository';

container.registerSingleton<IBuyerRepository>(
    'BuyerRepository',
    BuyerRepository,
);