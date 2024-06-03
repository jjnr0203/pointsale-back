import { IsString } from "class-validator";

export class UpadateOrderDetailDto{
    
    @IsString()
    quantity: number;
}