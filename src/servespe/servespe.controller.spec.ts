import { Test, TestingModule } from '@nestjs/testing';
import { ServEspeController } from './servespe.controller';

describe('ServEspeController', () => {
  let controller: ServEspeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServEspeController],
    }).compile();

    controller = module.get<ServEspeController>(ServEspeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
