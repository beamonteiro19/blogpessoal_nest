import { Module } from '@nestjs/common';
import { Tema } from './entities/tema.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TemaController } from './controller/tema.controller';
import { TemaService } from './services/tema.service';

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  providers: [TemaService],
  controllers: [TemaController],
  exports: [TemaService],
})
export class TemaModule {}
