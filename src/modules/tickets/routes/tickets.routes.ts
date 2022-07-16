import { Router } from "express";
import TicketController from "../controllers/TicketController";
import { Joi, celebrate, Segments } from 'celebrate'

const ticketsRouter = Router();
const ticketsController = new TicketController();

ticketsRouter.get('/', ticketsController.index);

ticketsRouter.get('/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        }
    })
    , ticketsController.show);

ticketsRouter.post('/',
    celebrate({
        [Segments.BODY]: {
            price: Joi.number().precision(3).required(),
            quantity: Joi.number().required(),
            payment_method: Joi.string().required(),
            places: Joi.number().required()
        }
    }), ticketsController.create);

ticketsRouter.put('/:id',
    celebrate({
        [Segments.BODY]: {
            price: Joi.number().precision(3).required(),
            quantity: Joi.number().required(),
            payment_method: Joi.string().required(),
            places: Joi.number().required()
        },
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        }

    })
    , ticketsController.update);

ticketsRouter.delete('/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        }
    })
    , ticketsController.delete);

export default ticketsRouter;