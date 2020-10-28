import { Test, TestingModule } from '@nestjs/testing';
import { RespostaController } from './resposta.controller';

describe('RespostaController', () => {
  let controller: RespostaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RespostaController],
    }).compile();

    controller = module.get<RespostaController>(RespostaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
