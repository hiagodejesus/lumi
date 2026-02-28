import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{
        provide: UsersService, 
        useValue: {
        create: jest.fn().mockResolvedValue({
          id: 1,
          name: 'Alioth',
        }),
        findAll: jest.fn().mockResolvedValue([
          {
            id: 1,
            name: 'Alioth',
          },
        ]),
      }}],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  it('should create an user', async () => {
    const result = await controller.create({ name: 'Alioth' });
    expect(result).toEqual({
      id: 1,
      name: 'Alioth',
    });
  });

  it('should return all users', async () => {
    const result = await controller.findAll();
    expect(result).toEqual([
      {
        id: 1,
        name: 'Alioth',
      },
    ]);
  });
});
