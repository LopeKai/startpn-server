import { Request, Response } from "express";
import { GetAllOccurencesCase } from "./GetAllOccurencesCase";

export class GetAllOccurrencesController {
    async handle(req: Request, res: Response) {
        const getAllOccurencesCase = new GetAllOccurencesCase()

        const result = await getAllOccurencesCase.execute()

        return res.status(201).json(result)
    }

}