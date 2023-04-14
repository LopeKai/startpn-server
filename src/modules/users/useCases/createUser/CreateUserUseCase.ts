import { User } from '@prisma/client'
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { AppError } from '../../../../errors/AppError';


export class CreateUserUseCase {
    async execute({ name, email, password }: CreateUserDTO): Promise<User> {
        // Verificar se usuário já existe

        const UserAlreaadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if (UserAlreaadyExists) {
            //erro
            throw new AppError("User already exists!");
        }


        //Criar o usuário
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password
            }
        })

        return user
    }
}