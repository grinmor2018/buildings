import { Test, TestingModule } from '@nestjs/testing';
import { ConsultingroomService } from './consultingroom.service';

describe('ConsultingroomService', () => {
  let service: ConsultingroomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConsultingroomService],
    }).compile();

    service = module.get<ConsultingroomService>(ConsultingroomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
