import { Test, TestingModule } from '@nestjs/testing';
import { ServeiController } from './servei.controller';

describe('ServeiController', () => {
  let controller: ServeiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServeiController],
    }).compile();

    controller = module.get<ServeiController>(ServeiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
