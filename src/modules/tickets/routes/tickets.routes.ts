import { Router } from "express";
import TicketController from "../controllers/TicketController";

const ticketsRouter = Router();
const ticketsController = new TicketController();

ticketsRouter.get('/', ticketsController.index);
ticketsRouter.get('/:id', ticketsController.show);
ticketsRouter.post('/', ticketsController.create);
ticketsRouter.put('/:id', ticketsController.update)
ticketsRouter.delete('/:id', ticketsController.delete);

export default ticketsRouter;