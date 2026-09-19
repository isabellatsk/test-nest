// é responsável por lidar com as requisições HTTP, define as rotas (GET, POST, etc), direcionamento dentro do backend

import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller('app')
//responsável por receber requisições HTTP (GET, POST, PUT, DELETE…) e responder
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('hello')
  async getHello() {
    const member = await this.prisma.teamMember.create({
      data: {
        id: 'capitao',
        name: 'joao',
        role: 'correr',
      },
    });
    return { member };
  }
}
