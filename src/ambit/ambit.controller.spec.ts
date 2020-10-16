import { Test, TestingModule } from '@nestjs/testing';
import { AmbitController } from './ambit.controller';

describe('AmbitController', () => {
  let controller: AmbitController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AmbitController],
    }).compile();

    controller = module.get<AmbitController>(AmbitController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
