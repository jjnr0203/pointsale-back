import { IsNotEmpty, IsString } from "class-validator";

export class ShipperDto{
    @IsNotEmpty()
    @IsString()
    userId: string;
    
}