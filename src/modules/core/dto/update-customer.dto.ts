import { IsString } from "class-validator";

export class UpdateCustomerDto{
    @IsString()
    identification: string;
    
    @IsString()
    phone: string;
    
    @IsString()
    address: string;

    @IsString()
    email: string;
}