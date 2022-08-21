import { client } from '../../prisma/client';
import { hash } from 'bcryptjs';

interface IRequest{
    name: string;
    username: string;
    password: string
}

class CreateUserUseCase {


    async execute({ name, username, password } : IRequest){

        //Verificar se o usuario existe
        const userAlreadyExists = await client.user.findFirst({
            where:{
                username
            }
        });

        if(userAlreadyExists) {
            throw new Error("User already exists!")
        }

        //Cadastra o usuario
        const passwordHash = await hash(password, 8);

        const user = await client.user.create({
            data:{
                name,
                username,
                password: passwordHash,
                status_message: "Feliz!"
            }
        });

        return user;
    }
}

export { CreateUserUseCase }