import { CreateOccurenceDTO } from "../../dtos/CreateOccurrenceDTO";
import { prisma } from "../../../../prisma/client";

export class CreateOccurencesCase {
    async execute({ name, origin, status }: CreateOccurenceDTO) {

        //Criar o Occorencia
        const occurencia = await prisma.occurrence.create({
            data: {
                name,
                origin,
                status,
            }
        })

        return occurencia
    }
}