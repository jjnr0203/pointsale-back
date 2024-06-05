import { IsNotEmpty, IsString } from "class-validator";
import { SupplierEntity } from "../entities/supplier.entity";
import { UserEntity } from "src/modules/auth/entities/user.entity";

export class UpdateShipperDto{
    @IsNotEmpty()
    supplier: SupplierEntity

    @IsNotEmpty()
    user: UserEntity
    

}