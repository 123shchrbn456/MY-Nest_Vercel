import { Injectable } from '@nestjs/common';
// import { CreateDriverDto } from './dto/create-driver.dto';
// import { UpdateDriverDto } from './dto/update-driver.dto';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class DriverService {
  constructor(private prisma: PrismaService) {}

  create(dto: Prisma.DriverCreateInput) {
    return this.prisma.driver.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.driver.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} driver`;
  }

  // update(id: number, updateDriverDto: UpdateDriverDto) {
  //   return `This action updates a #${id} driver`;
  // }

  remove(id: number) {
    return `This action removes a #${id} driver`;
  }
}
