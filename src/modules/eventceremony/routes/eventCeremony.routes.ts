import { Router } from "express";
import EventController from "../controller/eventCeremonyController";
import { Joi, celebrate, Segments } from 'celebrate'
import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated";

const eventRouter = Router();
const eventController = new EventController();

eventRouter.get('/', eventController.index);

eventRouter.get('/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        }
    })
    , eventController.show);

eventRouter.post('/', isAuthenticated,
    celebrate({
        [Segments.BODY]: {
            max_places: Joi.number().required(),
            cep: Joi.number().required(),
            name: Joi.string().required(),
            status: Joi.string().required(),
            ticket_value: Joi.number().required(),
            type_event: Joi.string().required(),
            adress: Joi.string().required()
        }
    }), eventController.create);

eventRouter.put('/:id',
    celebrate({
        [Segments.BODY]: {
            max_places: Joi.number().required(),
            cep: Joi.number().required(),
            name: Joi.string().required(),
            status: Joi.string().required(),
            ticket_value: Joi.number().required(),
            type_event: Joi.string().required(),
            adress: Joi.string().required()
        },
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        }

    })
    , eventController.update);

eventRouter.delete('/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        }
    })
    , eventController.delete);

export default eventRouter;