import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import BuyerController from '../controller/BuyerController';
import isAuthenticated from '../../../shared/http/middlewares/isAuthenticated';

const buyerRouter = Router();
const buyerController = new BuyerController();

buyerRouter.use(isAuthenticated);

buyerRouter.get('/', buyerController.index);

buyerRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    buyerController.show,
);

buyerRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            document_type: Joi.string().required(),
            document_serial: Joi.number().required(),
        },
    }),
    buyerController.create,
);

buyerRouter.put(
    '/:id',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            document_type: Joi.string().required(),
            document_serial: Joi.number().required(),
        },
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    buyerController.update,
);

buyerRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    buyerController.delete,
);

export default buyerRouter;