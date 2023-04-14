import { Router } from "express";
import { CreateOccurenceController } from "../modules/occurences/occurencesCases/createOccurences/CreateOccurenceController";
import { GetAllOccurrencesController } from "../modules/occurences/occurencesCases/getAllOccurences/GetAllOccurencesController";

const createOccurenceController = new CreateOccurenceController
const getAllOccurrencesController = new GetAllOccurrencesController

const occurrenceRoutes = Router();

occurrenceRoutes.post('/', createOccurenceController.handle);
occurrenceRoutes.get('/', getAllOccurrencesController.handle)

export { occurrenceRoutes }