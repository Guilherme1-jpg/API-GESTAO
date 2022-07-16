import ticketsRouter from "../../modules/tickets/routes/tickets.routes";
import { Router } from "express";

const routes = Router();

routes.use('/tickets', ticketsRouter);

export default routes;