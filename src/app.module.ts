// importa os controladores e serviços que a aplicação usa
// organiza e conecta os pedaços da aplicação

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';

@Module({
  imports: [], // outros módulos entram aqui
  controllers: [AppController], // controladores da aplicação
  //tudo que não é um controller é um providers
  providers: [PrismaService], // serviços injetados (lógica de negócio)
})
export class AppModule {}
