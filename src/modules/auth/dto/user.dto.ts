import { CatalogueEntity } from "src/modules/core/entities/catalogue.entity";
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class UserDto{
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email:string;
    
    @IsNotEmpty()
    @IsString()
    password:string 

    @IsNotEmpty()
    role:CatalogueEntity
}