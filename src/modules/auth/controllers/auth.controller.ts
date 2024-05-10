import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { UserEntity } from '../user.entity';
import { userDto } from '../dto/user.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Get()
    async findOne(@Body() email){
        const userFound = await this.authService.findOne(email)
        return {
            data:userFound
        }
    }

    @Post()
    async createUSer(@Body() userDto){
        

    }
}
