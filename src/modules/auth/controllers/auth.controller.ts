import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginDto } from '../dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() payload: LoginDto) {
    const serviceResponse = await this.authService.validateUser(payload);
    return {
      data: serviceResponse,
    };
  }

  @Get('profile')
  getProfile() {
    return 'Tiene acceso a una ruta restringida';
  }
}
