import { IsNotEmpty, IsOptional, IsString } from "class-validator";
import { OrderDetailDto } from "./order-detail.dto";
import { CatalogueEntity } from "../entities/catalogue.entity";
import { ShopEntity } from "../entities/shop.entity";
import { CustomerEntity } from "../entities/customer.entity";

export class OrderDto{

    @IsOptional()
    @IsString()
    paymentMethod: CatalogueEntity;
    
    @IsOptional()
    @IsString()
    customerId:CustomerEntity;
    
    @IsNotEmpty()
    @IsString()
    shopId:ShopEntity;

}
