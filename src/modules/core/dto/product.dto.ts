import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ProductDto{

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    unit: number;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    cost: number;

    @IsNotEmpty()
    shopsId: string[];
}
