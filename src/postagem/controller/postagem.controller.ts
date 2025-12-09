import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Postagem } from '../entities/postagem.entity';
import { PostagemService } from '../services/postagem.service';
import { retry } from 'rxjs';

@Controller('/postagens') // Indica que a classe é uma controller
export class PostagemController {
  constructor(private readonly postagemService: PostagemService) {
    // Indica qual tipo de requisição
  }
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Postagem[]> {
    return this.postagemService.findAll();
  }
  //  a função achar pelo id, busca pelo o id e retorna uma promise contendo a postagem
  @Get('/:id')
  // como é uma busca, utilizamos o método Get
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id_Post): Promise<Postagem> {
    //modificamos o id para o @Param e refrenciamos o id dentro do metodo
    return this.postagemService.findById(id_Post);
  }

  @Get('/titulo/:titulo')
  @HttpCode(HttpStatus.OK)
  findbyTitulo(@Param('titulo') titulo: string): Promise<Postagem[]> {
    return this.postagemService.findByTitulo(titulo);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemService.create(postagem);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() postagem: Postagem): Promise<Postagem> {
    return this.postagemService.update(postagem);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.postagemService.delete(id);
  }
}
