import { IsString } from "class-validator";

export class UpdateShopDto{
    @IsString()
    name: string;

    @IsString()
    ruc: string;

    @IsString()
    address: string;

    @IsString()
     phone: string;

    @IsString()
     email: string;
}