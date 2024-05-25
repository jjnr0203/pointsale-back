import { Module } from '@nestjs/common';
import { CataloguesService } from './services/catalogues.service';
import { CatalogueController } from './controllers/catalogues.controller';
import { DatabaseModule } from 'src/database/database.module';
import { coreProviders } from './providers/core.providers';
import { OrdersService } from './services/orders.service';
import { OrderController } from './controllers/orders.controllers';
import { CustomersService } from './services/customers.service';
import { CustomerController } from './controllers/customers.controller';

@Module({
    imports:[DatabaseModule],
    providers: [...coreProviders,CustomersService,OrdersService,CataloguesService],
    controllers: [CatalogueController, OrderController, CustomerController],
    exports:[]
})
export class CoreModule {}
