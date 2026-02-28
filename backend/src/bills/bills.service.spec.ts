import { Test, TestingModule } from '@nestjs/testing';
import { BillsService } from './bills.service';
import { PrismaService } from '../prisma/prisma.service';

describe('BillsService', () => {
  let service: BillsService;

  const prismaMock = {
    bill: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BillsService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<BillsService>(BillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a bill', async () => {
    prismaMock.bill.create.mockResolvedValue({
      id: 1,
      kwh: 100,
      total: 500,
    });

    const result = await service.create({ kwh: 100, total: 500 });

    expect(result).toEqual({ id: 1, kwh: 100, total: 500 });
  });

  it('should return all bills', async () => {
    prismaMock.bill.findMany.mockResolvedValue([
      { id: 1, kwh: 100, total: 500 },
    ]);

    const result = await service.findAll();

    expect(result).toEqual([{ id: 1, kwh: 100, total: 500 }]);
  });
});