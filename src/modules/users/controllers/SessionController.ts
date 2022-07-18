import { Request, Response } from "express";
import CreateSessionUserService from "../services/CreateSessionUserService";

export default class SessionController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { email, password } = req.body;

        const createSessionUser = new CreateSessionUserService();

        const user = await createSessionUser.execute({
            email,
            password
        })

        return res.json(user)
    }
}