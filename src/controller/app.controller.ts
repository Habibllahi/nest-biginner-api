import { Body, Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import { AppService } from '../provider/service/app.service';
import { Request, Response } from 'express';
import { Message } from '../type/message';
import { Ping } from '../type/pint';

@Controller("api/v1")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("ping1")
  async getHello(@Res() response: Response):  Promise<Response<any, Record<string, any>>> {
    return response.status(200).json({res : this.appService.getHello()}).send();
  }

  @Post("ping2")
  async getHello2(@Req() request: Request): Promise<Ping> {
    let greetings: Message = request.body;
    return {res : greetings.greetings};
  }

  @Post("ping3")
  async getHello3(@Body() greetings: Message): Promise<Ping> {
    return {res : greetings.greetings};
  }

  @Post("ping4")
  async getHello4(@Query("greetings") greetings: string): Promise<Ping> {
    return {res : greetings};
  }


}
