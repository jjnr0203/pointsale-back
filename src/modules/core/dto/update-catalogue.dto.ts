import {  IsOptional, IsString } from "class-validator";

export class UpdateCatalogueDto{
    @IsOptional()
    @IsString()
    name:string;
    
    @IsOptional()
    @IsString()
    description:string;
    
    @IsOptional()
    @IsString()
    type:string
}