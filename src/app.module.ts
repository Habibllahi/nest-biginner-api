import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './provider/service/app.service';
import { CatService } from './provider/service/catService';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CatService],
})
export class AppModule {}
