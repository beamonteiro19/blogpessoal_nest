import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'db_postagens' }) // Indicando que a classe é uma model e que ira converter num banco de dados
export class Postagem {
  @PrimaryGeneratedColumn() // Chave primaria auto incremental
  id: number;

  @IsNotEmpty() // é igual o nut null no sql e regra do mysql - not null
  @Column({ length: 100, nullable: false })
  titulo: string;

  @IsNotEmpty() // é igual o nut null no sql e regra do mysql - not null
  @Column({ length: 1000, nullable: false })
  texto: string;


  @UpdateDateColumn()
  data: Date;
}
