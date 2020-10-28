import { Test, TestingModule } from '@nestjs/testing';
import { EdificiService } from './edificis.service';

describe('EdificiService', () => {
  let service: EdificiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EdificiService],
    }).compile();

    service = module.get<EdificiService>(EdificiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
