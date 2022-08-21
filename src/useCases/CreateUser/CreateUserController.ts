import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'


class CreateUserController {


    async handle(request: Request, response: Response){

        if(!request.body.username || !request.body.name || !request.body.password){
            return response.status(400).json({
                message: "Data missing!"
            })
        }

        const { name, username, password } = request.body

        const createUserUseCase = new CreateUserUseCase()

        const user = await createUserUseCase.execute({
            name,
            username,
            password
        })

        return response.json(user);
    }
}

export { CreateUserController }