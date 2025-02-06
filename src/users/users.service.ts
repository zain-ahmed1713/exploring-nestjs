import { Injectable } from '@nestjs/common';

@Injectable() // The @Injectable() decorator marks a class as a provider, making it available for dependency injection within the application.
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Zain Ahmed',
      email: 'zainahmed1713@gmail.com',
      role: 'Super Admin',
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      role: 'Admin',
    },
  ];

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
