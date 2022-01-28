import {Request, Response, NextFunction} from "express"
import postFunctions from "../functions/postFunctions"

const firstMiddleware = (req: Request, res: Response, next: NextFunction) =>{
    req.body = postFunctions.firstParser(req.body.data);
    next();
};

const secondMiddleware = (req: Request, res: Response, next: NextFunction) => {
    req.body = postFunctions.secondParser(req.body.data);
    next();
};

export default {
    firstMiddleware: firstMiddleware,
    secondMiddleware: secondMiddleware
};