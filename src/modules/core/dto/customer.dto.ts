import { IsNotEmpty, IsString } from "class-validator";
import { ShopEntity } from "../entities/shop.entity";

export class CustomerDto{
    
    @IsNotEmpty()
    @IsString()
    identification: string;

    @IsNotEmpty()
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @IsString()
    phone: string;
    
    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    shops:ShopEntity[];
}