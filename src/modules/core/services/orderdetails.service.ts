import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Repository } from "typeorm";
import { OrderdetailEntity } from "../entities/orderdetail.entity";
import { OrderDetailDto } from "../dto/orderdetail.dto";
import { UpadateOrderDetailDto } from "../dto/update-orderdetail.dto";

@Injectable()
export class OrderDetailsService{
    constructor(
        @Inject('ORDERDETAILS_REPOSITORY') 
        private respository: Repository<OrderdetailEntity>
    ){}

    async finAll(){
        return await this.respository.find();
    }

    async findOne(id:string){
        const orderdetail = await this.respository.findOne({
            where: {id},
        });

        if(!orderdetail){
            throw new NotFoundException('Detalle de orden no encontrada')
        }
        return orderdetail;
    }

    async create(orderDetailDto: OrderDetailDto){
        return this.respository.create(orderDetailDto)
    }

    async update(id:string, orderDetailDto:UpadateOrderDetailDto){
        const orderdetail = await this.respository.findBy({id});
        if(!orderdetail){
            throw new NotFoundException('')
        }
        return this.respository.update(id, orderDetailDto);
    }

    async remove(id:string){
        const orderdetail = await this.respository.findBy({ id });
        return this.respository.softRemove(orderdetail);
    }
    
}