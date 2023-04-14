import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CatService } from '../provider/service/catService';
import { Cat } from '../model/cat';
import { CatNotFoundEsception } from 'src/exception/catNotFoundException';

@Controller('api/v1')
export class CatController {
  constructor(private catService: CatService) {}

  @Get('cat')
  public findAll() {
    this.catService.findAll();
  }

  @Post('cat')
  public createCat(@Body() cat: Cat) {
    this.catService.create(cat);
  }

  @Get('ex1')
  public hitException1() {
    throw new HttpException(
      { xyz: 'testing someting', pqt: 'still testing' },
      HttpStatus.FORBIDDEN,
    );
  }

  @Get('ex2')
  public hitException2() {
    throw new HttpException('testing something', HttpStatus.FORBIDDEN);
  }

  @Get('ex3')
  public hitException3() {
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
  public hitException4() {
    throw new BadRequestException({
      xyz: 'testing someting',
      pqt: 'still testing',
    });
  }

  @Get('ex5')
  public hitException5() {
    throw new CatNotFoundEsception(
      'testing something with optional',
      HttpStatus.FORBIDDEN,
      {
        cause: new Error(),
        description: 'dont know the cause',
      },
    );
  }
}
