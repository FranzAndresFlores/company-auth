import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/auth.dto';


@Controller('/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/sign-in')
  create(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
  }

}
