import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

@Injectable()
export class ContentTypeMiddle implements NestMiddleware{
    use(req: Request, res: Response, next: (error?: any) => void) {
        const contentType = req.header('Content-Type');
        if(contentType === 'application/json'){
            next();
        }else{
            res.status(401)
            .json({"error": "expected application/json as content type"})
            .send()
        }
    }
}