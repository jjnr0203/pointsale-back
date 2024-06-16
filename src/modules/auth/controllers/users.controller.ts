import {Body, Controller, Post, Get, Delete, Param, Put, Query} from '@nestjs/common';
import {UsersService} from '../services/users.service';
import {UserDto} from '../dto/user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { UserEntity } from '../entities/user.entity';
import { CatalogueEntity } from 'src/modules/core/entities/catalogue.entity';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async findAll() {
        const serviceResponse = await this.usersService.findAll();
        console.log(serviceResponse)
        return {
            data: serviceResponse,
            message: 'Usuarios'
        }
    }

    @Get('/:roleId')
        async findUsersByRole(@Param('roleId') roleId: string): Promise<UserEntity[]> {
        return this.usersService.findUserByRole(roleId);
    }

    @Get(':id')
    async findOne(@Param('id') id:string){
        const user = await this.usersService.findOne(id)
        return {
            data: user,
            message: 'usuario encontrado'
        }
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() payload:UpdateUserDto){
        const updatedUser = await this.usersService.update(id,payload)
        return{
            data:updatedUser,
            message:'Usuario actualizado'
        }
    }

    @Post('')
    async create(@Body() payload: UserDto) {
        const serviceResponse = await this.usersService.create(payload);
        return {
            data: serviceResponse,
        };
    }


    @Delete(':id')
    async delete(@Param('id') id: string) {
        const serviceResponse = await this.usersService.remove(id)
        return {
            data: serviceResponse,
            message: 'Usuario eliminado'
        }
    }
}
