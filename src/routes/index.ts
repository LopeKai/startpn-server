import { Router } from "express";
import { userRoutes } from "./user.routes";
import { sessionsRoutes } from "./sessions.routes";
import { occurrenceRoutes } from "./ocurrence.routes";

const routes = Router();

routes.use("/users", userRoutes)
routes.use("/sessions", sessionsRoutes);
routes.use("/occurrence", occurrenceRoutes)

export { routes }