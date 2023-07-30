import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {

  // Cargar las variables de entorno desde el archivo .env

  console.log(process.env.MONGODB_CONNECTION_STRING)

  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
