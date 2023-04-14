import { Body, Controller, Get, HttpStatus, Post, Query, Req, Res, UseFilters } from '@nestjs/common';
import { Request, Response } from 'express';
import { Message } from '../type/message';
import { Ping } from '../type/pint';
import { AppService } from '../provider/service/app.service';
import { CatNotFoundExceptionHandler } from 'src/exception/handler/customexception';
import { CatNotFoundException } from 'src/exception/catNotFoundException';

@Controller('api/v1')
@UseFilters(CatNotFoundExceptionHandler)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('ping1')
  async getHello(
    @Res() response: Response,
  ): Promise<Response<any, Record<string, any>>> {
    return response
      .status(200)
      .json({ res: this.appService.getHello() })
      .send();
  }

  @Post('ping2')
  async getHello2(@Req() request: Request): Promise<Ping> {
    const greetings: Message = request.body;
    return { res: greetings.greetings };
  }

  @Post('ping3')
  async getHello3(@Body() greetings: Message): Promise<Ping> {
    return { res: greetings.greetings };
  }

  @Post('ping4')
  async getHello4(@Query('greetings') greetings: string): Promise<Ping> {
    return { res: greetings };
  }

  @Get('ping5')
  async getHello5(@Query('greetings') greetings: string): Promise<Ping> {
    throw new CatNotFoundException(
      {
        status: HttpStatus.FORBIDDEN,
        code: 100,
        message: 'Can Not find Cat entity'
      },
      HttpStatus.FORBIDDEN,
      {
        cause: new Error(),
        description: 'dont know the cause',
      },
    );
  }
}
