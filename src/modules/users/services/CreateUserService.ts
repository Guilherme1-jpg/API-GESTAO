import AppError from '../../../shared/errors/AppError'
import { getCustomRepository } from 'typeorm';
import User from '../typeorm/entities/Users';
import UserRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({ name, email, password }: IRequest): Promise<User> {
        const userRepository = getCustomRepository(UserRepository);
        const emailVerify = await userRepository.findByEmail(email);

        if (emailVerify) {
            throw new AppError("Sorry, email already used")
        }

        const user = userRepository.create({
            name, email, password
        });

        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;