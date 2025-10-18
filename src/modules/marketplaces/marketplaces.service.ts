import { Injectable } from '@nestjs/common';
import { CreateMarketplaceDto } from './dto/create-marketplace.dto';
import { UpdateMarketplaceDto } from './dto/update-marketplace.dto';
import { PrismaService } from 'src/db/prisma.service';
import { ResponseMarketplaceDto } from './dto/response-marketplace.dto';

@Injectable()
export class MarketplacesService {
  constructor(private prisma: PrismaService) {}
  async create(
    createMarketplaceDto: CreateMarketplaceDto,
  ): Promise<ResponseMarketplaceDto> {
    const marketplace = await this.prisma.marketplace.create({
      data: {
        ...createMarketplaceDto,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return marketplace;
  }

  async findAll() {
    const marketplaces = await this.prisma.marketplace.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    return marketplaces;
  }

  async findOne(id: string) {
    const marketplace = await this.prisma.marketplace.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return marketplace;
  }

  async update(
    id: string,
    updateMarketplaceDto: UpdateMarketplaceDto,
  ): Promise<ResponseMarketplaceDto> {
    const marketplace = await this.prisma.marketplace.update({
      where: {
        id,
      },
      data: {
        ...updateMarketplaceDto,
      },
    });
    return marketplace;
  }

  async remove(id: string) {
    await this.prisma.marketplace.delete({
      where: {
        id,
      },
    });
    return;
  }
}
