import { Test, TestingModule } from '@nestjs/testing';
import { ServeiService } from './servei.service';

describe('ServeiService', () => {
  let service: ServeiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServeiService],
    }).compile();

    service = module.get<ServeiService>(ServeiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
