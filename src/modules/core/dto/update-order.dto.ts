import { IsString } from "class-validator";

export class UpdateOrderDto{

    @IsString()
    paymentMethod: string;
    
    @IsString()
    total: 'number';    
    
}