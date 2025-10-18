import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './db/prisma.module';
import { AccessesModule } from './modules/accesses/accesses.module';
import { StoresModule } from './modules/stores/stores.module';
import { UsersModule } from './modules/users/users.module';
import { MarketplacesModule } from './modules/marketplaces/marketplaces.module';

@Module({
  imports: [UsersModule, AccessesModule, StoresModule, PrismaModule, MarketplacesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
