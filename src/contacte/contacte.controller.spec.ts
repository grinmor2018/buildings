import { Test, TestingModule } from '@nestjs/testing';
import { ContacteController } from './contacte.controller';

describe('ContacteController', () => {
  let controller: ContacteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContacteController],
    }).compile();

    controller = module.get<ContacteController>(ContacteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
