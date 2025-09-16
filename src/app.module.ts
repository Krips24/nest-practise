/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { TestingController } from './testing/testing.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, TestingController],
  providers: [AppService],
})
export class AppModule {}
