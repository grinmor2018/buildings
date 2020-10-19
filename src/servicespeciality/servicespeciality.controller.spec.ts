import { Test, TestingModule } from '@nestjs/testing';
import { ServicespecialityController } from './servicespeciality.controller';

describe('ServicespecialityController', () => {
  let controller: ServicespecialityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServicespecialityController],
    }).compile();

    controller = module.get<ServicespecialityController>(ServicespecialityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
