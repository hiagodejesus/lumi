import { Test, TestingModule } from '@nestjs/testing';
import { BillsController } from './bills.controller';
import { BillsService } from './bills.service';

describe('BillsController', () => {
  let controller: BillsController;
  let service: BillsService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillsController],
      providers: [{
        provide: BillsService, 
        useValue: {
          create: jest.fn().mockResolvedValue({id: 1, kwh: 100, total: 500}),
          findAll: jest.fn().mockResolvedValue([{id: 1, kwh: 100, total: 500}]),
        }
      }],
    }).compile();

    controller = module.get<BillsController>(BillsController);
    service = module.get<BillsService>(BillsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a bill', async () => {
    const result = await service.create({ kwh: 100, total: 500 });
    expect(result).toEqual({id: 1, kwh: 100, total: 500});
  });

  it('should return all bills', async () => {
    const result = await service.findAll();
    expect(result).toEqual([{id: 1, kwh: 100, total: 500}]);
  });
});
