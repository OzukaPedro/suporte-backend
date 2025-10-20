import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoresService {
  constructor(private prisma: PrismaService) {}
  async create(createStoreDto: CreateStoreDto) {
    console.log(createStoreDto);
    const { accesses, ...storeData } = createStoreDto;

    const store = await this.prisma.store.create({
      data: {
        ...storeData,
        accesses: accesses
          ? {
              createMany: {
                data: accesses,
              },
            }
          : undefined,
      },
      select: {
        id: true,
        name: true,
        accesses: {
          select: {
            id: true,
            type: true,
            username: true,
            password: true,
          },
        },
      },
    });

    return store;
  }

  // retornará todos os stores incluindo os accesses (sem expor senha)
  async findAll() {
    const stores = await this.prisma.store.findMany({
      select: {
        id: true,
        name: true,
        baseUrl: true,
        marketplaceId: true,
        accesses: {
          select: {
            id: true,
            type: true,
            username: true,
            password: true,
            storeId: true,
            // omitir password para não vazar credenciais
          },
        },
      },
    });
    return stores;
  }

  // retornará um store com todos os accesses (sem expor senha)
  async findOne(id: string) {
    const store = await this.prisma.store.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
        name: true,
        baseUrl: true,
        marketplaceId: true,
        accesses: {
          select: {
            id: true,
            type: true,
            username: true,
            password: true,
            storeId: true,
          },
        },
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

  // novo: buscar todos os stores de uma marketplace pelo marketplaceId
  async findByMarketplace(marketplaceId: string) {
    const stores = await this.prisma.store.findMany({
      where: { marketplaceId },
      select: {
        id: true,
        name: true,
        baseUrl: true,
        marketplaceId: true,
        accesses: {
          select: {
            id: true,
            type: true,
            username: true,
            password: true, // recomendo omitir
            storeId: true,
          },
        },
      },
    });
    return stores;
  }
}
