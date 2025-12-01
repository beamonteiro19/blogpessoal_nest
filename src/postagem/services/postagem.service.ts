import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Postagem } from "../entities/postagem.entity";

 
@Injectable() // Indica que esta classe, é uma classe de servioço que pode ser injeteda diretamente em outras classses
export class PostagemService{

// GRANDE PARTE DAS SERVICES SO CONTEM OS METODOS

// iniciando ferramentas de servico
constructor(
    // pode cjamar os metodos de uma classe repository
    @InjectRepository(Postagem)
    private postagemRepository: Repository<Postagem>
){}

async findAll(): Promise<Postagem[]> {
    return await this.postagemRepository.find()
}
}