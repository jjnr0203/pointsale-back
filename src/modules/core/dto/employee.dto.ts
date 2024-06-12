import { IsNotEmpty, IsString } from "class-validator";
import { UserEntity } from "src/modules/auth/entities/user.entity";
import { ShopEntity } from "../entities/shop.entity";

export class EmployeDto{
    
    @IsNotEmpty()
    user: UserEntity;

    @IsNotEmpty()
    shop: ShopEntity;

}