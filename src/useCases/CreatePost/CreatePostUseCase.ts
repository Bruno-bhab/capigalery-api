import { client } from "../../prisma/client";

interface IRequest {
    userId:     string;
    title:      string;
    url:        string;
}

class CreatePostUseCase {
    async execute({ userId, title, url } : IRequest){
        const post = await client.post.create({
            data: {
                userId,
                title,
                url
            }
        })
        
        return post
    }
}

export { CreatePostUseCase }