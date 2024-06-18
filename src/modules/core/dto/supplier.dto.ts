import { Injectable } from "@nestjs/common";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { ShipperEntity } from "../entities/shipper.entity";

@Injectable()
export class SupplierDto{
    @IsString()
    @IsNotEmpty()
    supplierName:string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    contactEmail: string;

    @IsNotEmpty()
    shipper: ShipperEntity[];
}