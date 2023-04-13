import { Module } from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './provider/service/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
