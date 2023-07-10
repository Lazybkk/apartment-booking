import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.BE_PORT, 10) || 3000;
  await app.listen(port);
  logger.log(`Server listening on port ${port}`)
}
bootstrap();
