import { Router } from "express";
import UserController from "../controllers/UserController";
import { Joi, celebrate, Segments } from 'celebrate';
import isAuthenticated from "../middlewares/isAuthenticated";

const userRouter = Router();
const userController = new UserController();

userRouter.get('/', isAuthenticated, userController.index);

userRouter.post('/', celebrate({
    [Segments.BODY]: {
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    }
}), userController.create);

export default userRouter;