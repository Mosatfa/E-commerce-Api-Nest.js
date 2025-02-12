import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { BcryptService } from './bcrypt/bcrypt.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../user/schema/user.schema';
import { JwtService } from '@nestjs/jwt';
import { TokenService } from './service/generate&VerifyToken.service';
import { MailService } from '../mail/mail.service';
import { RefreshToken, RefreshTokenSchema } from '../auth/schema/refresh-token.schema';
import { RefreshTokenService } from './service/refresh-token.service';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: RefreshToken.name, schema: RefreshTokenSchema }
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, BcryptService, JwtService, TokenService ,MailService ,RefreshTokenService]
})
export class AuthModule { }
