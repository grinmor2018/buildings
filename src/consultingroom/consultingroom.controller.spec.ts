import { Test, TestingModule } from '@nestjs/testing';
import { ConsultingroomController } from './consultingroom.controller';

describe('ConsultingroomController', () => {
  let controller: ConsultingroomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsultingroomController],
    }).compile();

    controller = module.get<ConsultingroomController>(ConsultingroomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
