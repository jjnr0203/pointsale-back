import { IsNotEmpty, IsString } from "class-validator";

export class ShopDto{
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    ruc: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
     phone: string;

    @IsNotEmpty()
    @IsString()
     email: string;
}