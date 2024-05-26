import { IsNotEmpty, IsString } from "class-validator";
import { OrderEntity } from "../entities/order.entity";
import { ProductEntity } from "../entities/product.entity";

export class OrderDetailDto{

    @IsNotEmpty()
    @IsString()
    quantity: number;
    
    @IsNotEmpty()
    @IsString()
    order: OrderEntity;
    
    @IsNotEmpty()
    product: ProductEntity;

    
}