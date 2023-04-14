import { HttpException, HttpExceptionOptions } from '@nestjs/common';

export class CatNotFoundEsception extends HttpException {
  constructor(
    response: string | Record<string, any>,
    status: number,
    options?: HttpExceptionOptions,
  ) {
    super(response, status, options);
  }
}
