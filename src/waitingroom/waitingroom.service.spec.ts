import { Test, TestingModule } from '@nestjs/testing';
import { WaitingroomService } from './waitingroom.service';

describe('WaitingroomService', () => {
  let service: WaitingroomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WaitingroomService],
    }).compile();

    service = module.get<WaitingroomService>(WaitingroomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
