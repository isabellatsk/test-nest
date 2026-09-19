// inicializa a aplicação

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // cria a aplicação a partir do módulo principal
  await app.listen(process.env.PORT ?? 3000); // sobe o servidor na porta 3000
}
bootstrap();
