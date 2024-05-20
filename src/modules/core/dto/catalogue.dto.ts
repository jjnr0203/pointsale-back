import { IsNotEmpty, IsString } from "class-validator";

export class CatalogueDto{

    @IsNotEmpty()
    @IsString()
    name:string;
    
    
    @IsNotEmpty()
    @IsString()
    description:string;
    
    @IsNotEmpty()
    @IsString()
    type:string
}