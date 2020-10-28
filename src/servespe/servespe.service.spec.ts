import { Test, TestingModule } from '@nestjs/testing';
import { ServEspeService } from './servespe.service';

describe('ServEspeService', () => {
  let service: ServEspeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServEspeService],
    }).compile();

    service = module.get<ServEspeService>(ServEspeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
