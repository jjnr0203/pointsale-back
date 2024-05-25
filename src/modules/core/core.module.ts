import { Module } from '@nestjs/common';
import { CataloguesService } from './services/catalogues.service';
import { CatalogueController } from './controllers/catalogues.controller';
import { DatabaseModule } from 'src/database/database.module';
import { coreProviders } from './providers/core.providers';
import { OrdersService } from './services/orders.service';
import { OrderController } from './controllers/orders.controllers';

@Module({
    imports:[DatabaseModule],
    providers: [OrdersService,CataloguesService,...coreProviders],
    controllers: [CatalogueController, OrderController],
    exports:[]
})
export class CoreModule {}
