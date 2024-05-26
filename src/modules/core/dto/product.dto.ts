import { IsNotEmpty, IsString } from "class-validator";

export class ProductDto{

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    unit: number;

    @IsNotEmpty()
    @IsString()
    price: number;

    @IsNotEmpty()
    @IsString()
    cost: number;
    
    @IsNotEmpty()
    catalogueId: string;
    
}
