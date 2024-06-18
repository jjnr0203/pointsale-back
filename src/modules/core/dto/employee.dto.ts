import { IsNotEmpty, IsString } from "class-validator";
import { UserEntity } from "src/modules/auth/entities/user.entity";
import { ShopEntity } from "../entities/shop.entity";
import { UserDto } from "src/modules/auth/dto/user.dto";

export class EmployeDto{
    
    @IsNotEmpty()
    user: UserDto;

    @IsNotEmpty()
    shop: ShopEntity;

}