// postagem.entity.ts
import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { Tema } from '../../tema/entities/tema.entity';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_postagens' })
export class Postagem {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @ApiProperty()
  @Column({ length: 100, nullable: false })
  titulo: string;

  @IsNotEmpty()
  @ApiProperty()
  @Column({ length: 1000, nullable: false })
  texto: string;

  @UpdateDateColumn()
  @ApiProperty()
  data: Date;

  @ApiProperty()
  @ManyToOne(() => Tema, (tema) => tema.postagem, {
    onDelete: 'CASCADE',
  })

  @ApiProperty()
  @JoinColumn({ name: 'tema_id' })
  tema: Tema;

  @ApiProperty()
  @ManyToOne(() => Usuario, (usuario) => usuario.postagem, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;
}
