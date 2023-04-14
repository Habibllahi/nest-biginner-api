import { CatService } from './provider/service/catService';
import { CatController } from './controller/cat.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [CatController],
  providers: [CatService],
  exports: [CatService],
})
export class CatModule {}
