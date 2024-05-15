import { IsString, IsEmail, IsOptional } from "class-validator";
import { CatalogueEntity } from "src/modules/core/entities/catalogue.entity";

export class UpdateUserDto{

    @IsString()
    @IsOptional()
    name?: string;
    
    @IsEmail()
    @IsOptional()
    email?:string;
    
    @IsString()
    @IsOptional()
    password?:string 
    
    @IsOptional()
    role?:CatalogueEntity

}