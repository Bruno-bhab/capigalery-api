import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).json({
            message: "Token is missing!"
        })
    }

    //Remove um sufixo que vem no token
    const [, token] = authToken.split(" ");

    try {
        verify(token, "capigalery", (err, decoded) => {
            if(err) throw Error;
            request.body.userId = decoded.sub
        });
        return next();
    } catch (err) {
        return response.status(401).json({
            message: "Token invalid!"
        })
    }

}