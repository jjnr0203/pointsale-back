import { IsNotEmpty, IsString } from "class-validator";

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
}