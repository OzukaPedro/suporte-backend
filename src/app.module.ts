import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AccessesModule } from './accesses/accesses.module';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [UsersModule, AccessesModule, StoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
