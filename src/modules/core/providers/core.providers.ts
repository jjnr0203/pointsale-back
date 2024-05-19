import { DataSource } from 'typeorm'
import { CatalogueEntity } from '../entities/catalogue.entity'
import { CustomerEntity } from '../entities/customer.entity'
import { EmployeeEntity } from '../entities/employee.entity'
import { OrderdetailEntity } from '../entities/orderdetail.entity'
import { ProductEntity } from '../entities/product.entity'
import { ShopEntity } from '../entities/shop.entity'
import { OrderEntity } from '../entities/order.entity'

export const coreProviders = [
    {
        provide: 'CATALOGUE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(CatalogueEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'CUSTOMER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(CustomerEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'EMPLOYEE_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(EmployeeEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'ORDER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(OrderEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'ORDERDETAIL_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(OrderdetailEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'PRODUCT_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ProductEntity),
        inject: ['DATA_SOURCE'],
    },
    {
        provide: 'SHOP_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(ShopEntity),
        inject: ['DATA_SOURCE'],
    },
]