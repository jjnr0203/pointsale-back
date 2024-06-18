import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ShopEntity } from "../entities/shop.entity";

export class ProductDto{

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    unit: number;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    cost: number;

    @IsNotEmpty()
    shops: ShopEntity[];
}
