import { IsNotEmpty, IsString } from "class-validator";
import { UserEntity } from "src/modules/auth/entities/user.entity";

export class ShipperDto{
    
    @IsNotEmpty()
    user: UserEntity; 
}