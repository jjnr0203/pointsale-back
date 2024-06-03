import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { OrderEntity } from "../entities/order.entity";
import { ProductEntity } from "../entities/product.entity";

export class OrderDetailDto{

    @IsNotEmpty()
    @IsNumber()
    quantity: number;
    
    @IsNotEmpty()
    order: OrderEntity;
    
    @IsNotEmpty()
    product: ProductEntity; 
}