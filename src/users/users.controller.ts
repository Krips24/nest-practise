/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Call the getAllUsers method from service
  @Get()
  getUsers() {
    return this.usersService.getAllUsers();
  }

  // Call the getUserByName method from service
  @Get(':name')
  getUserByName(@Param('name') name: string) {
    return this.usersService.getUserByName(name);
  }
}
