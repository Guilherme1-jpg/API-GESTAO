import sessionRouter from "../../modules/users/routes/userSession.routes";
import { Router } from "express";
import ticketsRouter from "../../modules/tickets/routes/tickets.routes";
import userRouter from "../../modules/users/routes/user.routes";
import profileRouter from "../../modules/users/routes/profile.routes";
import buyerRouter from "../../modules/buyer/routes/buyer.routes";
import eventRouter from "../../modules/eventceremony/routes/eventCeremony.routes";

const routes = Router();

routes.use('/tickets', ticketsRouter);
routes.use('/user', userRouter);
routes.use('/session', sessionRouter);
routes.use('/profile', profileRouter);
routes.use('/buyer', buyerRouter);
routes.use('/event', eventRouter);

export default routes;