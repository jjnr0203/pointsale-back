import { Module } from '@nestjs/common';
require('dotenv').config()
import { AuthService, UsersService } from './services';
import {JwtModule} from '@nestjs/jwt'
import { UsersController } from './controllers/users.controller';
import { AuthController } from './controllers/auth.controller';
import { userProviders } from './providers';
import { DatabaseModule } from 'src/database/database.module';


@Module({
  imports:[DatabaseModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions:{expiresIn:'1h'}
    })
  ],
  providers: [AuthService, UsersService,...userProviders],
  controllers: [UsersController, AuthController]
})
export class AuthModule {}
