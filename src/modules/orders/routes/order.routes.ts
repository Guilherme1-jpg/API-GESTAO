import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';
import OrdersController from '../controllers/OrderController';

const ordersRouter = Router();
const ordersController = new OrdersController();

ordersRouter.use(isAuthenticated);

ordersRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    ordersController.show,
);

ordersRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            buyer_id: Joi.string().uuid().required(),
            tickets: Joi.required(),
        },
    }),
    ordersController.create,
);

export default ordersRouter;