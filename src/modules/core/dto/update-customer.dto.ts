import { IsString } from "class-validator";

export class UpdateCustomerDto{
    @IsString()
    customerName: string;
    
    @IsString()
    contactName: string;
    
    @IsString()
    address: string;

    @IsString()
    email: string;
}