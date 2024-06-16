import { IsNotEmpty, IsString } from "class-validator";

export class UpdateSupplierDto{
    @IsNotEmpty()
    @IsString()
    supplierName:string
    
    @IsNotEmpty()
    @IsString()
    phone:string

    @IsNotEmpty()
    @IsString()
    contactEmail: string;
}