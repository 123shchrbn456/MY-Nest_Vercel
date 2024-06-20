import { Injectable } from '@nestjs/common';
// import { CreateCarDto } from './dto/create-car.dto';
// import { UpdateCarDto } from './dto/update-car.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  create(dto: Prisma.CarCreateInput) {
    return this.prisma.car.create({
      data: dto,
    });
  }

  findAll() {
    return this.prisma.car.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} car`;
  }

  // update(id: number, updateCarDto: UpdateCarDto) {
  //     return `This action updates a #${id} car`;
  // }

  remove(id: number) {
    return `This action removes a #${id} car`;
  }
}
