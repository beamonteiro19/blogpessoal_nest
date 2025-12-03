import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';
import { Postagem } from '../entities/postagem.entity';
import { TemaService } from '../../tema/services/tema.service';

@Injectable() // Indica que esta classe, é uma classe de servioço que pode ser injeteda diretamente em outras classses
export class PostagemService {
  // GRANDE PARTE DAS SERVICES SO CONTEM OS METODOS

  // iniciando ferramentas de servico
  constructor(
    // pode cjamar os metodos de uma classe repository
    @InjectRepository(Postagem)
    private postagemRepository: Repository<Postagem>,
    private temaService: TemaService,
  ) {}

  async findAll(): Promise<Postagem[]> {
    return await this.postagemRepository.find({
      relations: {
        tema: true,
      },
    });
  }

  async findById(id: number): Promise<Postagem> {
    let postagem = await this.postagemRepository.findOne({
      where: {
        id,
      },
      relations: {
        tema: true,
      },
    });
    //se a postagem for nula, vai cair dentro dessa estrutura condicional
    if (!postagem) {
      throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);
    }
    return postagem;
  }
  async findByTitulo(titulo: string): Promise<Postagem[]> {
    return await this.postagemRepository.find({
      where: {
        titulo: ILike(`%${titulo}`),
      },
    });
  }
  // SELECT * FROM tb_postagem WHERE LIKE %{titulo}
  async create(postagem: Postagem): Promise<Postagem> {
    await this.temaService.findById(postagem.tema.id);
    return await this.postagemRepository.save(postagem);
  }

  async update(postagem: Postagem): Promise<Postagem> {
    await this.findById(postagem.id);
    await this.temaService.findById(postagem.tema.id);

    return await this.postagemRepository.save(postagem);
  }

  async delete(id: number): Promise<DeleteResult> {
    let buscaPostagem = await this.findById(id);
    if (!buscaPostagem)
      throw new HttpException('Postagem nao encontrada!', HttpStatus.NOT_FOUND);

    return await this.postagemRepository.delete(id);
  }
}
