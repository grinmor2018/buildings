import { Test, TestingModule } from '@nestjs/testing';
import { ServicespecialityService } from './servicespeciality.service';

describe('ServicespecialityService', () => {
  let service: ServicespecialityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicespecialityService],
    }).compile();

    service = module.get<ServicespecialityService>(ServicespecialityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
