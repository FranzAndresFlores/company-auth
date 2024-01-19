import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AccountModule } from 'src/admin/account/account.module';
import { JwtStategy } from './strategies/jwt.stategy';

@Module({
  imports: [
    AccountModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWTKEY,
      signOptions: { expiresIn: process.env.TOKEN_EXPIRATION }
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStategy],
})
export class AuthModule { }
