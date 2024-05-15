import {HttpException, HttpStatus, Inject, Injectable, NotFoundException} from '@nestjs/common';
import {Repository} from 'typeorm';
import {UserEntity} from '../entities/user.entity';
import {UserDto} from '../dto/user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {    
    constructor(
        @Inject('USER_REPOSITORY')
        private repository: Repository<UserEntity>
    ){}

    async findAll(): Promise<UserEntity[]> {
        return await this.repository.find();
    }

    async findOne(id:string){
        const user = await this.repository.findOne({ 
            where: {id},
            relations:{role:true}
        })
        if(!user){throw new NotFoundException('Usuario no encontrado')}
        return user
    }

    async findUserByEmail(email:string){
        const user = await this.repository.findOne({
            where: {email},
        })
        if(!user){throw new NotFoundException('Usuario no encontrado');}
        return user
    }

    async create(user: UserDto){
        const userFound =  await this.repository.findOne({
            where:{email:user.email}
        })
        if(userFound){ throw new HttpException('El usuario ya existe', HttpStatus.CONFLICT)}
        const newUser = this.repository.create(user)
        return await this.repository.save(newUser)
    }

    async update(id: string, updateUser: UpdateUserDto) {
        const user = await this.repository.findOne({where:{id}});
        if (!user) {
            throw new NotFoundException('Usuario no encontrado');
        }
        if (updateUser.password) {
            updateUser.password = await bcrypt.hash(updateUser.password, 10);
        }
        await this.repository.update(id, updateUser);
        return this.repository.findBy({id})
    }

    async remove(id:string){
        const user = await this.repository.findOneBy({id})
        if(!user){throw new NotFoundException('Usuario no encontrado')}
        return this.repository.softRemove(user);
    }
}