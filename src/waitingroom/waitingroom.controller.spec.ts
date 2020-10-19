import { Test, TestingModule } from '@nestjs/testing';
import { WaitingroomController } from './waitingroom.controller';

describe('WaitingroomController', () => {
  let controller: WaitingroomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WaitingroomController],
    }).compile();

    controller = module.get<WaitingroomController>(WaitingroomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
