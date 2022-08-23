import { NextFunction, Request, Response } from "express";

export function ensureRequestCheckInfo (request: Request, response: Response, next: NextFunction){
    if(Object.keys(request.body).length === 0){
        return response.status(400).json({message:"Bad request!"})
    }
    Object.keys(request.body).forEach(key => {
        if(request.body[key].trim() === ""){
            return response.status(400).json({message:"Bad request!", error: `${key} cannot be empty!`})
        }
    });

    return next();

}
