import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>
  ) { }

  async findOneByEmail(email: string) {
    const account = await this.accountRepository.findOne({
      relations: ['user'],
      where: {
        email: email
      }
    });
    return { account };
  }

}
