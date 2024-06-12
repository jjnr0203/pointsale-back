import { Module } from '@nestjs/common';
import { CataloguesService } from './services/catalogues.service';
import { CatalogueController } from './controllers/catalogues.controller';
import { DatabaseModule } from 'src/database/database.module';
import { coreProviders } from './providers/core.providers';
import { OrdersService } from './services/orders.service';
import { OrdersController } from './controllers/orders.controllers';
import { CustomersService } from './services/customers.service';
import { CustomerController } from './controllers/customers.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { ShopsController } from './controllers/shops.controller';
import { ShopsService } from './services/shops.service';
import { SuppliersService } from './services/suppliers.service';
import { ShippersService } from './services/shippers.service';
import { EmployesService } from './services/employes.service';
import { SuppliersController } from './controllers/suppliers.controller';
import { ShippersController } from './controllers/shippers.controller';

@Module({
    imports:[DatabaseModule],
    providers: [...coreProviders,
        CustomersService,
        OrdersService,
        CataloguesService,
        ProductsService,
        ShopsService,
        SuppliersService,
        ShippersService,
        EmployesService
     ],
    controllers: [CatalogueController,
        OrdersController,
        CustomerController,
        ProductsController,
        ShopsController,
        SuppliersController,
        ShippersController
    ],
    exports:[]
})
export class CoreModule {}
