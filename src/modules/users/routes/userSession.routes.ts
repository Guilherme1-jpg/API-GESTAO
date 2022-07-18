import { Router } from "express";
import SessionController from "../controllers/SessionController";
import { Joi, celebrate, Segments } from 'celebrate';

const sessionRouter = Router();
const SessionUserController = new SessionController();

sessionRouter.post('/', celebrate({
    [Segments.BODY]: {
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    }
}), SessionUserController.create);

export default sessionRouter;