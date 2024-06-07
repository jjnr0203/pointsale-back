import { IsNotEmpty, IsString } from "class-validator";

export class EmployeDto{
    
    @IsNotEmpty()
    @IsString()
    userId: string;

    @IsNotEmpty()
    @IsString()
    shopId: string;

}