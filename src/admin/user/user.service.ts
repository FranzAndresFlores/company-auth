import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) { }

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    user.account.password = await bcrypt.hash(user.account.password, 10);
    await this.userRepository.save(user);
    return { idUser: user.idUser }
  }

  async findAll() {
    const users = await this.userRepository.find();
    return { users }
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { idUser: id } });
    return { user };
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({ idUser: id, ...updateUserDto });
    if (user) {
      await this.userRepository.save(user);
      return { user }
    }
  }
}
