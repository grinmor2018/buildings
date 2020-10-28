import { Test, TestingModule } from '@nestjs/testing';
import { ContacteService } from './contacte.service';

describe('ContacteService', () => {
  let service: ContacteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContacteService],
    }).compile();

    service = module.get<ContacteService>(ContacteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
