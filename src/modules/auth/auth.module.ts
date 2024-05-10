import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import {JwtModule} from '@nestjs/jwt'
import { UsersController } from './controllers/users.controller';
import { AuthController } from './controllers/auth.controller';
import { userProviders } from './providers/user.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports:[DatabaseModule,
    JwtModule.register({
      secret:'901n7S4l#',
      signOptions:{expiresIn:'1h'}
    })
  ],
  providers: [AuthService, UsersService,...userProviders],
  controllers: [UsersController, AuthController]
})
export class AuthModule {}
