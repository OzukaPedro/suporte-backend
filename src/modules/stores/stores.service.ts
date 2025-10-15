import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoresService {
  constructor(private prisma: PrismaService) {}
  async create(createStoreDto: CreateStoreDto) {
    const store = await this.prisma.store.create({
      data: {
        ...createStoreDto,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return store;
  }

  async findAll() {
    const stores = await this.prisma.store.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return stores;
  }

  async findOne(id: string) {
    const store = await this.prisma.store.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return store;
  }

  async update(id: string, updateStoreDto: UpdateStoreDto) {
    const store = await this.prisma.store.update({
      where: {
        id,
      },
      data: {
        ...updateStoreDto,
      },
    });
    return store;
  }

  async remove(id: string) {
    const store = await this.prisma.store.delete({
      where: {
        id,
      },
    });
    return store;
  }
}
