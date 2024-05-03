import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './modules/core/core.module';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import connectionDB from './database.config';

@Module({
  imports: [CoreModule, AuthModule, TypeOrmModule.forRoot(connectionDB)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
