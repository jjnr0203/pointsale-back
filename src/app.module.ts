import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { OrdersModule } from './orders/orders.module';
import { CoreModule } from './modules/core/core.module';
import { AuthModule } from './modules/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import connectionDB from './database.config';

@Module({
  imports: [
    OrdersModule,
    CoreModule,
    AuthModule,
    TypeOrmModule.forRoot(connectionDB),
  ],
  controllers: [AppController, OrdersController],
  providers: [AppService, OrdersService],
})
export class AppModule {}
