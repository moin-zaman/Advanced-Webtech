import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminsModule } from './admins/admins.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './admins/entities/admin.entity';
import { FoodEntity } from './admins/entities/food.entity';
import { APP_PIPE } from '@nestjs/core';


@Module({
  imports: [ AdminsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'M96633030m',
    database: 'mydb',
    entities: [ AdminEntity, FoodEntity ],
    synchronize: true,
  }), ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_PIPE, useClass: ValidationPipe }],
})
export class AppModule {}
