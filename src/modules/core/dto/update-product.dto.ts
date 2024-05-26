import { IsString } from "class-validator";

export class UpdateProductDto{

    @IsString()
    name?: string;

    @IsString()
    unit?: number;

    @IsString()
    price?: number;

    @IsString()
    cost?: number;
}