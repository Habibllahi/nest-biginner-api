import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatService } from '../provider/service/catService';
import { Cat } from '../model/cat';

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
}
