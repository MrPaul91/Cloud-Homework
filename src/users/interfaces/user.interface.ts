import { Document } from 'mongoose';

export interface UserI extends Document {

  readonly username: string;
  readonly name: string;
  /*readonly notes: note;*/
}