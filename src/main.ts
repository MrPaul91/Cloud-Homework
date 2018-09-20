import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UsersModule } from './users/users.module';
import * as Cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(Cors());

  const options = new DocumentBuilder()
    .setTitle('Users Example')
    .setDescription('Users for Back-End Challenge Homework')
    .setVersion('1.0')
    .setSchemes('https' || 'http') /*Permitir peticiones https*/
    .addTag('users')
    .build();
  const userDocument = SwaggerModule.createDocument(app, options, { include: [UsersModule] });
  SwaggerModule.setup('api', app, userDocument);

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
