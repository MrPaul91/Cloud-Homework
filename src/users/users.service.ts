import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserI } from './interfaces/user.interface';
import { UserServiceI } from './interfaces/user.serviceI';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService implements UserServiceI{
  constructor(@InjectModel('User') private readonly userModel: Model<UserI>) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserI> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  async findAll(): Promise<UserI[]> {
    return await this.userModel.find().exec();
  }

  async getUserByUsername(user: string): Promise<UserI> {
    return await this.userModel.findOne({username: user}).exec();
  }

  async deleteUserByUsername(user: string): Promise<UserI> {
    return await this.userModel.deleteOne({username: user}).exec();
  }

  async updateUser(userNm: string, newUserBody: CreateUserDto ): Promise<UserI> {
    const user = await this.userModel.findByUsername(userNm).exec();

    if (!user){
      throw new Error(`User with username ${userNm} not found in the Data Base`);
    }
    else{
      return await this.userModel.findByUsernameAndUpdate(userNm, newUserBody).exec();
    }
  }
}
