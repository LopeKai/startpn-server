import { Occurrence } from "@prisma/client";
import { prisma } from "../../../../prisma/client"

export class GetAllOccurencesCase {
    async execute() {
        const ocurrences = await prisma.occurrence.findMany({})

        return ocurrences
    }

}
