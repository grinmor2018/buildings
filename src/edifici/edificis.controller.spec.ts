import { Test, TestingModule } from '@nestjs/testing';
import { EdificiController } from './edificis.controller';

describe('BuildingController', () => {
  let controller: EdificiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EdificiController],
    }).compile();

    controller = module.get<EdificiController>(EdificiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
