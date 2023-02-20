import { Module } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { AdminsController } from './admins.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './entities/admin.entity';
import { FoodEntity } from './entities/food.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity, FoodEntity])],
  controllers: [AdminsController],
  providers: [AdminsService],
  exports: [TypeOrmModule]
})
export class AdminsModule {}
