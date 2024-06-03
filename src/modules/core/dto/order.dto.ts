import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { OrderDetailDto } from "./order-detail.dto";
import { CatalogueEntity } from "../entities/catalogue.entity";
import { ShopEntity } from "../entities/shop.entity";
import { CustomerEntity } from "../entities/customer.entity";

export class OrderDto{

    @IsNotEmpty()
    paymentMethod: CatalogueEntity;
    
    @IsNotEmpty()
    customer:CustomerEntity;
    
    @IsNotEmpty()
    shop:ShopEntity;

    @IsOptional()
    @IsNumber()
    cash:number;
    
    @IsOptional()
    @IsNumber()
    cashBack:number;

    ordersDetails:OrderDetailDto[]

}
