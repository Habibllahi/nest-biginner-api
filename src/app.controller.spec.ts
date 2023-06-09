import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './controller/app.controller';
import { AppService } from './provider/service/app.service';


describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello(null)).toBe('Hello World!');
    });
  });
});
