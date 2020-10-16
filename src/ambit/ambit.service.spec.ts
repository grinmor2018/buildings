import { Test, TestingModule } from '@nestjs/testing';
import { AmbitService } from './ambit.service';

describe('AmbitService', () => {
  let service: AmbitService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AmbitService],
    }).compile();

    service = module.get<AmbitService>(AmbitService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
