import { Injectable } from "@nestjs/common";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ShipperEntity } from "../entities/shipper.entity";
import { UserDto } from "src/modules/auth/dto/user.dto";
import { ShopEntity } from "../entities/shop.entity";

@Injectable()
export class SupplierDto{

    @IsNotEmpty()
    user:UserDto

    @IsString()
    @IsNotEmpty()
    name:string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    shops:ShopEntity[]
}