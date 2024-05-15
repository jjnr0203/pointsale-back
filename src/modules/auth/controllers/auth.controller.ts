import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from '../services/auth.service';
import {loginDto} from "../dto/login.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
    }

    @Post('login')
    async login(@Body() payload: loginDto) {
        return await this.authService.validateUser(payload)
    }
}
