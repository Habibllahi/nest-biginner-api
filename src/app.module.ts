import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './provider/service/app.service';
import { CatModule } from './cat-module/cat.modules';

@Module({
  imports: [CatModule],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
