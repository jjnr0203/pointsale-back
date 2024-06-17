import { IsNotEmpty, IsString } from "class-validator";
import { UserDto } from "src/modules/auth/dto/user.dto";
import { SupplierEntity } from "../entities/supplier.entity";

export class ShipperDto{
    
    @IsNotEmpty()
    @IsString()
    user: UserDto; 

    @IsNotEmpty()
    @IsString()
    supplier: SupplierEntity;
}
