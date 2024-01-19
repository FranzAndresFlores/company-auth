import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { AccountService } from 'src/admin/account/account.service';
import { SignInDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private accountService: AccountService,
    private jwtService: JwtService
  ) { }


  async signIn(signInDto: SignInDto) {
    const account = await this.accountService.findOneByEmail(signInDto.email);
    if (!account.account) {
      throw new HttpException(
        'No existe el usuario, por favor contáctese con el administrador',
        HttpStatus.OK
      );
    }

    if (!account.account.isActive || !account.account.user.isActive) {
      throw new HttpException(
        'El usuario está inactivo, por favor contáctese con el administrador',
        HttpStatus.OK
      );
    }

    if (!bcrypt.compareSync(signInDto.password, account.account.password)) {
      throw new HttpException(
        'El usuario o contraseña es incorrecto',
        HttpStatus.OK
      );
    }

    const payload = {
      idUser: account.account.user.idUser,
      firstName: account.account.user.firstName,
      lastName: account.account.user.lastName,
      dni: account.account.user.dni
    }

    const token = this.jwtService.sign(payload);

    return {
      user: payload,
      token: token
    }
  }
}
