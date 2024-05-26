import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { UserEntity } from "src/modules/auth/entities/user.entity";

export class ShopDto{
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    ruc: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsNotEmpty()
    @IsString()
     phone: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    user: UserEntity;
}