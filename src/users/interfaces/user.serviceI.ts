import { UserI } from './user.interface';
import { CreateUserDto } from '../dto/create-user.dto';

export interface UserServiceI {

  createUser(userBody: CreateUserDto): Promise<UserI>;

  findAll(): Promise<UserI[]>;

  getUserByUsername(username: string): Promise<UserI>;

  deleteUserByUsername(user: string): Promise<UserI>;

  updateUser(idUser: string, newNoteBody: CreateUserDto);

}