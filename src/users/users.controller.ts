import { Controller, Get, Param, Body, Post, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserI } from './interfaces/user.interface';
import { CreateUserDto } from './dto/create-user.dto';

import { ApiResponse, ApiUseTags } from '@nestjs/swagger';

@Controller('users')
@ApiUseTags('users')
export class UsersController {

  constructor(private readonly userService: UsersService) { }

  @Post()
  @ApiResponse({ status: 201, description: 'The user has been successfully created.' })
  public async createUser(@Body() createUserBody: CreateUserDto): Promise<UserI> {
    const userCreated = await this.userService.createUser(createUserBody);
    return userCreated;
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Everything is correct to show all user' })
  public async findAll(): Promise<UserI[]> {

    return await this.userService.findAll();

  }

  @Get()
  @ApiResponse({ status: 200, description: 'Everything is correct to show a user' })
  public async findUserByUsername(@Param('username') userNm: string): Promise<UserI> {
    return await this.userService.getUserByUsername(userNm);
  }

  @Delete()
  @ApiResponse({ status: 200, description: 'The user has been deleted successfully.' })
  public async deleteUserByUsername(@Param('username') username: string): Promise<UserI> {
    return await this.userService.deleteUserByUsername(username);

  }

  @Put()
  @ApiResponse({ status: 201, description: 'The user has been successfully updated.' })
  public async updateUser(@Param('username') userNm: string, @Body() userToUpdate: CreateUserDto): Promise<UserI> {
    return await this.userService.updateUser(userNm, userToUpdate);

  }

}