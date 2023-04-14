import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Request, Response } from "express";
import { CatNotFoundException } from "../catNotFoundException";


@Catch(CatNotFoundException)
export class CatNotFoundExceptionHandler
  implements ExceptionFilter<CatNotFoundException>
{
  catch(exception: CatNotFoundException, host: ArgumentsHost) {
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
