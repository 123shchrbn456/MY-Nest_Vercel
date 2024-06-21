import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
// import { CreateBudgetDto } from './dto/create-budget.dto';
// import { UpdateBudgetDto } from './dto/update-budget.dto';

@Injectable()
export class BudgetService {
  constructor(private prisma: PrismaService) {}

  create(dto: Prisma.BudgetCreateInput) {
    return this.prisma.budget.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.budget.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} budget`;
  }

  // update(id: number, updateBudgetDto: UpdateBudgetDto) {
  //   return `This action updates a #${id} budget`;
  // }

  remove(id: number) {
    return `This action removes a #${id} budget`;
  }
}
