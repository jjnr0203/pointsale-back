import {Injectable, NotFoundException} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {JwtService} from '@nestjs/jwt';
import {UsersService} from './users.service';
import {LoginDto} from "../dto/login.dto";

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private usersService:UsersService
    ) {}
    async validateUser(payload: LoginDto) {
        const userFound = await this.usersService.findUserByEmail(payload.email)
        if (!userFound) {
            throw new NotFoundException('Usuario no encontrado');
        }
        const isMatch = await bcrypt.compare(payload.password, userFound.password);
        if (isMatch) {
            const payload = { 
                sub: userFound.id, 
                username: userFound.name, 
                email:userFound.email, 
                role:userFound.role 
            };
            return {
                user:payload,
                token: await this.jwtService.signAsync(payload)
            }
        } else {
            throw new NotFoundException('Contraseña incorrecta')
        }
    }
}
