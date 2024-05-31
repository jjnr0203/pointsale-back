import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class OrderDetailDto{

    @IsNotEmpty()
    orderID:string

    @IsNotEmpty()
    @IsNumber()
    quantity: number;
    
    @IsString()
    @IsNotEmpty()
    productID: string;
}