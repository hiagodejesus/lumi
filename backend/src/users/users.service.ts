import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async update(updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id: updateUserDto.id }, data: {name : updateUserDto.name} });
  }

  async remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
