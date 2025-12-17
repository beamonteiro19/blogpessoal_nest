// Não cria uma entidade ou uma tabela no bd, mas auxilia para recerber as credenciais do usuario

import { ApiProperty } from "@nestjs/swagger"

export class UsuarioLogin{

    @ApiProperty()
    public usuario: string

    @ApiProperty()
    public senha: string
}