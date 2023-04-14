import { Request, Response } from "express";
import { prisma } from "../../prisma/client";
import { AppError } from "../../errors/AppError";

export class SessionsController {
    async create(request: Request, response: Response) {
        const { email, password } = request.body

        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })


        if (!user) {
            throw new AppError("E-mail e/ou senha incorreta", 404);
        }

        response.status(201).json({ user })
    }
}

