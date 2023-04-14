import { Request, Response } from "express";
import { CreateOccurencesCase } from "./CreateOccurencesCase";

export class CreateOccurenceController {
    async handle(req: Request, res: Response) {
        const { name, origin, status } = req.body

        const createOccurencesCase = new CreateOccurencesCase();

        const result = await createOccurencesCase.execute({ name, origin, status })

        return res.status(201).json(result)
    }

}