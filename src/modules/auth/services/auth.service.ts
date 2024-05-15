import {Inject, Injectable, NotFoundException} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';
import {UsersService} from './users.service';
import {loginDto} from "../dto/login.dto";
import {Repository} from "typeorm";
import {UserEntity} from "../entities/user.entity";

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private usersService:UsersService
    ) {}
    async validateUser(payload: loginDto) {
        const userFound = await this.usersService.findUserByEmail(payload.email)
        if (!userFound) {
            throw new NotFoundException('Usuario no encontrado');
        }
        const isMatch = await bcrypt.compare(payload.password, userFound.password);
        if (isMatch) {
            const {password, ...user} = userFound;
            return this.jwtService.signAsync(user);
        } else {
            throw new NotFoundException('Contraseña incorrecta')
        }
    }
}
