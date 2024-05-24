import { IsNotEmpty, IsString } from "class-validator";

export class OrderDto{

    @IsNotEmpty()
    @IsString()
    paymentMethod: string;
    
    @IsNotEmpty()
    @IsString()
    total: 'number';    
    
}