import { IsNotEmpty, IsString } from "class-validator";

export class CustomerDto{
    @IsNotEmpty()
    @IsString()
    customerName: string;
    
    @IsNotEmpty()
    @IsString()
    contactName: string;
    
    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
    email: string;
}