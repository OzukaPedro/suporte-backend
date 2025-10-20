import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateAccessDto } from './dto/create-access.dto';
import ResponseAccessDto from './dto/response-access.dto';
import { UpdateAccessDto } from './dto/update-access.dto';

@Injectable()
export class AccessesService {
  constructor(private prisma: PrismaService) {}
  async create(createAccessDto: CreateAccessDto): Promise<ResponseAccessDto> {
    const access = await this.prisma.access.create({
      data: {
        ...createAccessDto,
      },
      select: {
        id: true,
        type: true,
        username: true,
        password: true,
      },
    });
    return access;
  }

  async createMany(
    createAccessDto: CreateAccessDto[],
  ): Promise<ResponseAccessDto[]> {
    const accesses: ResponseAccessDto[] = [];
    for (const dto of createAccessDto) {
      const access = await this.prisma.access.create({
        data: {
          ...dto,
        },
        select: {
          id: true,
          type: true,
          username: true,
          password: true,
        },
      });
      accesses.push(access);
    }
    return accesses;
  }

  async findAll() {
    const accesses = await this.prisma.access.findMany({
      select: {
        id: true,
        type: true,
        username: true,
        password: true,
      },
    });
    return accesses;
  }

  async findOne(id: string) {
    const access = await this.prisma.access.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        type: true,
        username: true,
        password: true,
      },
    });
    return access;
  }

  async update(id: string, updateAccessDto: UpdateAccessDto) {
    const access = await this.prisma.access.update({
      where: {
        id,
      },
      data: {
        ...updateAccessDto,
      },
    });
    return access;
  }

  async remove(id: string) {
    const access = await this.findOne(id);

    if (!access) {
      throw new Error('Access not found');
    }
    await this.prisma.access.delete({
      where: {
        id,
      },
    });
    return;
  }
}
