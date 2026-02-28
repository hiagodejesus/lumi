import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service';

describe('UsersService', () => {
  let service: UsersService;

  const prismaMock = {
    user: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: prismaMock,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });

  it('should create a user', async () => {
    prismaMock.user.create.mockResolvedValue({
      id: 1,
      name: 'Alioth',
    });

    const result = await service.create({ name: 'Alioth' });

    expect(result).toEqual({ id: 1, name: 'Alioth' });

    expect(prismaMock.user.create).toHaveBeenCalledWith({
      data: { name: 'Alioth' },
    });
  });
});