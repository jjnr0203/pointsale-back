import { IsNotEmpty, IsString } from "class-validator";

export class OrderDetailDto{

    @IsNotEmpty()
    @IsString()
    quantity: number;
}