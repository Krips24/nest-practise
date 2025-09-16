/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'user1', email: 'user1@.com' },
    { id: 2, name: 'user2', email: 'user2@.com' },
    { id: 3, name: 'user3', email: 'user3@.com' },
  ];

  // Method to fetch all users
  getAllUsers() {
    return this.users;
  }

  // Method to fetch user by name - (name will be given by the user)
  getUserByName(name: string) {
    return this.users.find((user) => user.name === name);
  }
}
