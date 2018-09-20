import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb://Cordoba-Js:mLabBD1234@ds163382.mlab.com:63382/backend-homework')],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
