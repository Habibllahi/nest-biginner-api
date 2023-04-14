import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
  UseFilters,
} from '@nestjs/common';
import { CatService } from '../provider/service/catService';
import { Cat } from '../model/cat';
import { CatNotFoundException } from 'src/exception/catNotFoundException';
import { CatNotFoundExceptionHandler } from 'src/exception/handler/customexception';

@Controller('api/v1')
export class CatController {
  constructor(private catService: CatService) {}

  @Get('cat')
  public async findAll(): Promise<Cat[]> {
    return this.catService.findAll();
  }

  @Post('cat')
  public async createCat(@Body() cat: Cat): Promise<void> {
    return this.catService.create(cat);
  }

  @Get('ex1')
  public async  hitException1(): Promise<void>{
    throw new HttpException(
      { xyz: 'testing someting', pqt: 'still testing' },
      HttpStatus.FORBIDDEN,
    );
  }

  @Get('ex2')
  public async hitException2(): Promise<void> {
    throw new HttpException('testing something', HttpStatus.FORBIDDEN);
  }

  @Get('ex3')
  public async hitException3(): Promise<void> {
    throw new HttpException(
      'testing something with optional',
      HttpStatus.FORBIDDEN,
      {
        cause: new Error(),
        description: 'dont know the cause',
      },
    );
  }

  @Get('ex4')
  public async hitException4(): Promise<void> {
    throw new BadRequestException({
      xyz: 'testing someting',
      pqt: 'still testing',
    });
  }

  @Get('ex5')
  @UseFilters(CatNotFoundExceptionHandler)
  public async hitException5(): Promise<void> {
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

