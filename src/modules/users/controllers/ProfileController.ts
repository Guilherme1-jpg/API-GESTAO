import { Request, Response } from 'express';
import UpdateProfileService from '../services/UpdateProfileService';
import ShowProfileService from '../services/ShowProfileService';

export default class UserController {
    public async show(req: Request, res: Response): Promise<Response> {
        const user_id = req.user.id

        const ShowProfileUser = new ShowProfileService();


        const userProfile = await ShowProfileUser.execute({ user_id });

        return res.json(userProfile)
    }

    public async update(req: Request, res: Response): Promise<Response> {

        const user_id = req.user.id;
        const { name, email, password, old_password } = req.body;

        const updateProfile = new UpdateProfileService();

        const user = await updateProfile.execute({
            user_id,
            name,
            email,
            password,
            old_password,
        });

        return res.json(user)
    }
}
