import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UsersDocument } from './users.schema';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UsersDocument>,
  ) {}

  async findOne(username: string): Promise<User | undefined> {
    return this.usersModel.findOne({ username: username });
  }

  //

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.usersModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.usersModel.find().exec();
  }
}

// import { Injectable } from '@nestjs/common';

// // This should be a real class/interface representing a user entity
// export type User = any;

// @Injectable()
// export class UsersService {
//   private readonly users = [
//     {
//       userId: 1,
//       username: 'tomek',
//       password: 'p1',
//     },
//     {
//       userId: 2,
//       username: 'tom',
//       password: 'p2',
//     },
//   ];

//   async findOne(username: string): Promise<User | undefined> {
//     return this.users.find((user) => user.username === username);
//   }
// }
