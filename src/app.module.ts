import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './controller/app.controller';
import { AppService } from './provider/service/app.service';
import { CatModule } from './cat-module/cat.modules';
import { ContentTypeMiddle } from './middleware/contenTypeMiddleware';
import { CatController } from './cat-module/controller/cat.controller';
import { AcceptTypeMiddleware } from './middleware/aceptTypeMiddleware';

@Module({
  imports: [CatModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ContentTypeMiddle)
      .forRoutes(CatController)
      .apply(AcceptTypeMiddleware)
      .forRoutes({
        path: 'api/v1/cat',
        method: RequestMethod.GET,
      });
  }
}
