import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './create-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Res() res: Response): string {
    res.status(HttpStatus.CREATED).send();
    return 'This action returns all users';
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
}
