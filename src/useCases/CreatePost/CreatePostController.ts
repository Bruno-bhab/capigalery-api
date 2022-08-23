import { Request, Response } from 'express';
import { CheckRequestBodyProvider } from '../../provider/CheckRequestBodyProvider';
import { CreatePostUseCase } from './CreatePostUseCase'; 

class CreatePostController{
    async handle(request: Request, response: Response){

        //Verifica se todas as infos da request vieram
        const checkRequestBodyProvider = new CheckRequestBodyProvider;
        checkRequestBodyProvider.execute([ "title", "url" ], request.body)

        const { userId, title, url } = request.body;
        const createPostUseCase = new CreatePostUseCase();
        const post = await createPostUseCase.execute({
            userId,
            title,
            url
        })

        return response.json(post)
    }
}

export { CreatePostController }