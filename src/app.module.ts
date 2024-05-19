import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './modules/core/core.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ProductsService } from './services/products/products.service';
import { ProductsService } from './src/modules/auth/services/products/products.service';

@Module({
  imports: [DatabaseModule, CoreModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, ProductsService],
})
export class AppModule {}
