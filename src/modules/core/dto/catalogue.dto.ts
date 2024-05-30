import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CatalogueDto{

    @IsNotEmpty()
    @IsString()
    name:string;
    
    @IsNotEmpty()
    @IsNumber()
    code:number
    
    @IsNotEmpty()
    @IsString()
    description:string;
    
    @IsNotEmpty()
    @IsString()
    type:string
}