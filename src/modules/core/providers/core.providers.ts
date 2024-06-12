import { DataSource } from 'typeorm'
import { CatalogueEntity } from '../entities/catalogue.entity'
import { CustomerEntity } from '../entities/customer.entity'
import { EmployeeEntity } from '../entities/employee.entity'
import { OrderDetailEntity } from '../entities/order-detail.entity'
import { ProductEntity } from '../entities/product.entity'
import { ShopEntity } from '../entities/shop.entity'
import { OrderEntity } from '../entities/order.entity'
import { CoreEnum } from 'src/modules/enums/providers.enum'
import { ShipperEntity } from '../entities/shipper.entity'
import { SupplierEntity } from '../entities/supplier.entity'

export const coreProviders = [
    {
        provide: CoreEnum.CATALOGUE_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(CatalogueEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: CoreEnum.CUSTOMER_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(CustomerEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: CoreEnum.EMPLOYEE_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(EmployeeEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: CoreEnum.ORDER_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(OrderEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: CoreEnum.ORDER_DETAIL_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(OrderDetailEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: CoreEnum.PRODUCT_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ProductEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: CoreEnum.SHOP_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ShopEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: CoreEnum.SHIPPER_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ShipperEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: CoreEnum.SUPPLIER_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(SupplierEntity),
        inject: ['DATA_SOURCE'],
    },
]