import { sign } from 'jsonwebtoken'


class GenerateTokenProvider {
    async execute(userId: string){
        const token = sign({}, "capigalery", {
            subject: userId,
            expiresIn: '20s'
        });

        return token
    }
}

export { GenerateTokenProvider }