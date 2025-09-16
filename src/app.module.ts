/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsService } from './products/products.service';
import { ProductsController } from './products/products.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, UsersController],
  providers: [AppService, ProductsService, UsersService],
})
export class AppModule {}
