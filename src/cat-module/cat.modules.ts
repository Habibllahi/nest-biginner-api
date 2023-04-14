import { MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { CatService } from "./provider/service/catService";
import { CatController } from "./controller/cat.controller";
import { ContentTypeMiddle } from "./middleware/contenTypeMiddleware";
import { AcceptTypeMiddleware } from "./middleware/aceptTypeMiddleware";

@Module({
    controllers: [CatController],
    providers:[CatService],
    exports:[CatService]
})
export class CatModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(ContentTypeMiddle)
        .forRoutes(CatController)
        .apply(AcceptTypeMiddleware)
        .forRoutes({
            path: 'api/v1/cat',
            method: RequestMethod.GET
        });
    
    }
}