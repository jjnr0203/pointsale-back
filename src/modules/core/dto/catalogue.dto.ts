import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CatalogueDto{

    @IsNotEmpty()
    @IsString()
    name:string;
    
    @IsOptional()
    @IsNumber()
    code:number
    
    @IsNotEmpty()
    @IsString()
    description:string;
    
    @IsNotEmpty()
    @IsString()
    type:string
}