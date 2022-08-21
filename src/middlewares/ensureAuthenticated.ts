import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).json({
            message: "Token is missing!"
        })
    }

    //Usando o Bearer auth ele vem Bearer fjsdg3465kljhgddsfkjgl
    const [, token] = authToken.split(" ");

    try {
        verify(token, "capigalery");
        return next();
    } catch (error) {
        return response.status(401).json({
            message: "Token invalid!"
        })
    }

}