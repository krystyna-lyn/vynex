import { NestFactory } from '@nestjs/core';
import { CoreModule } from './core/core.module.js';
import { ConfigService } from '@nestjs/config';
import cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(CoreModule);

  const config = app.get(ConfigService);
  app.use(cookieParser(config.getOrThrow<string>('COOKIE_SECRET')));

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.enableCors(
    {
      origin: config.getOrThrow<string>('ALLOWED_ORIGIN'),
      credentials: true,
      exposedHeaders: ['set-cookie'],
    },
  );

  await app.listen(config.getOrThrow<number>('APPLICATION_PORT') ?? process.env.APPLICATION_PORT ?? 3000);
}
await bootstrap();





