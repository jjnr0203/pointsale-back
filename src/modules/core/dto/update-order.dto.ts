import { IsString } from "class-validator";
import { CatalogueEntity } from "../entities/catalogue.entity";

export class UpdateOrderDto{

    @IsString()
    paymentMethod: CatalogueEntity;
    
    @IsString()
    total: number;    
    
}
