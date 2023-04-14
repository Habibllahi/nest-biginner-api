import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { CatNotFoundEsception } from '../catNotFoundException';
import { Request, Response } from 'express';

@Catch(CatNotFoundEsception)
export class CatNotFoundException
  implements ExceptionFilter<CatNotFoundEsception>
{
  catch(exception: CatNotFoundEsception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const status = exception.getStatus();

    res
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: req.url,
      })
      .send();
  }
}
