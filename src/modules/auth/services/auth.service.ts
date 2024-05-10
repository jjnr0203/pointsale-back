import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { userDto } from '../dto/user.dto';
import { UserEntity } from '../user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(
        @Inject('USER_REPOSITORY')
        private repository: Repository<UserEntity>
    ) {}

    async findOne({email}:userDto){
        const userFound = await this.repository.findOne({where:{email}})
        if(!userFound){
            throw new NotFoundException('usuario no encontrado');
        }
        console.log(userFound);
        return userFound

    }
}
