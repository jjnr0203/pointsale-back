import { IsNotEmpty, IsString } from "class-validator";
import { OrderDetailDto } from "./order-detail.dto";

export class OrderDto{

    @IsNotEmpty()
    @IsString()
    paymentMethod: string;
    
    @IsNotEmpty()
    @IsString()
    customerId:string;

    @IsNotEmpty()
    @IsString()
    shopId:string;

    @IsNotEmpty()
    orderDetails:OrderDetailDto[]
}
