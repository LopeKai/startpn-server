import { Router } from "express";

import { SessionsController } from '../modules/sessions/SessionsController'

const sessionsController = new SessionsController();

const sessionsRoutes = Router();
sessionsRoutes.post("/", sessionsController.create);

export { sessionsRoutes }