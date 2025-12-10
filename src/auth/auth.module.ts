import { forwardRef, Module } from '@nestjs/common';
import { Bcrypt } from './bcrypt/bcrypt';
import { AuthService } from './services/auth.service';
import { LocalStrategy } from './strategy/jwt.strategy';
import { AuthController } from './controller/auth.controller';
import { UsuarioModule } from '../usuario/usuario.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/constants';

@Module({
  imports: [
    forwardRef(() => UsuarioModule),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [Bcrypt, AuthService, LocalStrategy],
  controllers: [AuthController],
  exports: [Bcrypt],
})
export class AuthModule {}
