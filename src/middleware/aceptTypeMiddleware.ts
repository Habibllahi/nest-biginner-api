import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AcceptTypeMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: (error?: any) => void) {
    const contentType = req.header('Accept');
    if (contentType === 'application/json') {
      next();
    } else {
      res
        .status(401)
        .json({ error: 'expected application/json as Accept' })
        .send();
    }
  }
}
