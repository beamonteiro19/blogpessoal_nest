<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<h1 align="center">Blog Pessoal - Backend</h1>

<p align="center">
  Uma aplicação backend robusta e escalável para gerenciamento de blog pessoal com autenticação JWT e controle de usuários.
</p>
<p align="center">
  <strong>Parte do projeto fullstack:</strong> <a href="https://github.com/seu-usuario/blogpessoal">Blog Pessoal</a>
  <br />
  <a href="https://github.com/seu-usuario/blogpessoal"><strong>Frontend em React »</strong></a>
</p>
---

## Descrição do Projeto

O **Blog Pessoal Backend** é uma API RESTful desenvolvida com NestJS que fornece funcionalidades completas para gerenciamento de conteúdo de blog. A aplicação permite que usuários criem contas, façam autenticação segura e gerenciem postagens categorizadas por temas.

Este projeto utiliza arquitetura modular baseada em padrões de design consolidados, garantindo manutenibilidade, escalabilidade e facilidade de testes.

---

## Funcionalidades

### Autenticação e Autorização
- Registro e login de usuários
- Autenticação via JWT (JSON Web Tokens)
- Validação de credenciais com bcrypt
- Guard de autorização para rotas protegidas
- Estratégias de autenticação local e JWT

### Gerenciamento de Postagens
- Criar, ler, atualizar e deletar postagens (CRUD completo)
- Buscar postagens por ID
- Buscar postagens por título (busca parcial)
- Associação de postagens com temas
- Associação de postagens com usuários

### Gerenciamento de Temas
- Criar, ler, atualizar e deletar temas (CRUD completo)
- Organizar postagens por categorias de temas
- Listar todos os temas disponíveis

### Gerenciamento de Usuários
- Cadastro de novos usuários
- Listar todos os usuários
- Atualizar informações do perfil
- Validação de email e senha
- Senha com hash seguro (bcrypt)

### Documentação
- API documentada com Swagger UI
- Endpoints descritos com exemplos
- Validação automática de dados

---

## Regras de Negócio

### Autenticação
- A senha do usuário deve ter **mínimo de 8 caracteres**
- O email deve ser **único** na base de dados
- A senha é armazenada com **hash bcrypt** (nunca em texto plano)
- Token JWT tem **validade configurável** para segurança

### Postagens
- Uma postagem **deve ter um usuário associado**
- Uma postagem **deve ter um tema associado**
- O título da postagem **deve conter entre 1 e 100 caracteres**
- O conteúdo da postagem **deve conter entre 1 e 1000 caracteres**
- Apenas usuários **autenticados** podem criar, editar ou deletar postagens
- Apenas postagens **com tema válido** são criadas com sucesso

### Temas
- Um tema **deve ter nome único** opcional
- Temas **organizam as postagens** categoricamente
- Um tema pode ter **múltiplas postagens associadas**

### Usuários
- Email deve ser **válido e único** (validação RFC 5322)
- Nome do usuário é **obrigatório**
- Senhas devem atender aos **requisitos mínimos de segurança**

---

## Tecnologias Utilizadas

### Framework e Runtime
- **Node.js** - Runtime JavaScript/TypeScript
- **NestJS 11.x** - Framework backend progressivo e escalável

### Linguagem
- **TypeScript 5.7** - Tipagem estática e melhor DX

### Banco de Dados
- **TypeORM 0.3** - ORM TypeScript/JavaScript
- **MySQL 2** - Banco de dados relacional principal
- **PostgreSQL** - Suporte para produção
- **SQLite 3** - Suporte para desenvolvimento/testes

### Autenticação e Segurança
- **JWT (@nestjs/jwt)** - Tokens JSON Web Token
- **Passport** - Middleware de autenticação
- **Passport-JWT** - Estratégia JWT para Passport
- **Passport-Local** - Estratégia local para login
- **Bcrypt** - Hash criptográfico para senhas

### Validação
- **class-validator** - Validação de DTOs
- **class-transformer** - Transformação de objetos

### Documentação
- **Swagger (@nestjs/swagger)** - Documentação automática da API
- **Swagger UI Express** - Interface web para Swagger

### Configuração
- **@nestjs/config** - Gerenciamento de variáveis de ambiente

### Testes
- **Jest** - Framework de testes
- **Supertest** - Testes HTTP
- **ts-jest** - Integração TypeScript com Jest

### Qualidade de Código
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **TypeScript ESLint** - ESLint com suporte TypeScript

---

## Instalação e Configuração

### Pré-requisitos
- Node.js (v18+)
- npm ou yarn
- MySQL (ou PostgreSQL/SQLite)

### Instalação das Dependências

```bash
npm install
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=sua_senha
DB_NAME=db_blogpessoal
JWT_SECRET=sua_chave_secreta_jwt
JWT_EXPIRES_IN=1d
NODE_ENV=development
```

---

## Executando o Projeto

### Modo Desenvolvimento
```bash
npm run start:dev
```
Inicia a aplicação em modo watch (recarrega automaticamente ao salvar)

### Modo Produção
```bash
npm run build
npm run start:prod
```

### Debug
```bash
npm run start:debug
```

---

## Testes

### Executar Testes Unitários
```bash
npm run test
```

### Modo Watch (Testes Contínuos)
```bash
npm run test:watch
```

### Cobertura de Testes
```bash
npm run test:cov
```

### Testes E2E
```bash
npm run test:e2e
```

---

## Estrutura do Projeto

```
src/
├── auth/                 # Módulo de autenticação
│   ├── controller/       # Controladores de auth
│   ├── services/         # Serviços de autenticação
│   ├── strategy/         # Estratégias Passport
│   ├── guard/            # Guards de autorização
│   ├── bcrypt/           # Serviço de hash
│   ├── constants/        # Constantes JWT
│   └── entities/         # Entidades de auth
├── usuario/              # Módulo de usuários
│   ├── controller/       # CRUD de usuários
│   ├── services/         # Lógica de usuários
│   ├── entities/         # Entidade Usuario
│   └── usuario.module.ts # Módulo
├── postagem/             # Módulo de postagens
│   ├── controller/       # CRUD de postagens
│   ├── services/         # Lógica de postagens
│   ├── entities/         # Entidade Postagem
│   └── postagem.module.ts # Módulo
├── tema/                 # Módulo de temas
│   ├── controller/       # CRUD de temas
│   ├── services/         # Lógica de temas
│   ├── entities/         # Entidade Tema
│   └── tema.module.ts    # Módulo
├── data/                 # Configuração de banco de dados
│   └── services/         # Serviços de conexão (dev/prod)
├── app.module.ts         # Módulo raiz
├── app.controller.ts     # Controlador principal
├── app.service.ts        # Serviço principal
└── main.ts               # Ponto de entrada
```

---

## Documentação da API

Após iniciar o servidor, acesse a documentação interativa em:

```
http://localhost:3000/api
```

---

## Licença

Este projeto está sob a licença UNLICENSED

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
