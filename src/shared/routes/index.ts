import sessionRouter from "../../modules/users/routes/userSession.routes";
import { Router } from "express";
import ticketsRouter from "../../modules/tickets/routes/tickets.routes";
import userRouter from "../../modules/users/routes/user.routes";

const routes = Router();

routes.use('/tickets', ticketsRouter);
routes.use('/user', userRouter);
routes.use('/session', sessionRouter)

export default routes;