import {  IsString } from "class-validator";

export class UpdateCatalogueDto{

    @IsString()
    name:string;
    
    
    @IsString()
    description:string;
    
    @IsString()
    type:string
}