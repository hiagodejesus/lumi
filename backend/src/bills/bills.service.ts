import { Injectable } from '@nestjs/common';
import { CreateBillDto, UpdateBillDto } from './dto/bill.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class BillsService {
  constructor(private prisma: PrismaService)  {}

  async create(createBillDto: CreateBillDto) {
    return this.prisma.bill.create({ data: createBillDto });
  }

  async findAll() {
    return this.prisma.bill.findMany();
  }

  async findOne(id: number) {
    return this.prisma.bill.findUnique({ where: { id } });
  }

  async update(updateBillDto: UpdateBillDto) {
    return this.prisma.bill.update({ where: { id: updateBillDto.id }, data: {kwh: updateBillDto.kwh, total: updateBillDto.total} });
  }

  async remove(id: number) {
    return this.prisma.bill.delete({ where: { id } });
  }
}
