import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Not, Repository } from "typeorm";
import { OrderEntity } from "../entities/order.entity";
import { OrderDto } from "../dto/order.dto";
import { UpdateOrderDto } from "../dto/update-order.dto";

@Injectable()
export class OrdersService {
    constructor(
        @Inject('ORDERS_REPOSITORY') 
        private respository: Repository<OrderEntity>
    ){}

    async finAll(){
        return await this.respository.find();
    }

    async findOne(id:string) {
        const order = await this.respository.findOne({
            where: {id},
        });

        if(!order) {
            throw new NotFoundException('Orden no encontrada');
        }
        return order;
    }

    async create(orderDto:OrderDto){
        return this.respository.create(orderDto)
    }

    async update(id:string, orderDto:UpdateOrderDto) {
        const order= await this.respository.findBy({ id });
        if(!order){
            throw new NotFoundException('No se encontro la orden')
        }
        return this.respository.update(id, orderDto);
    }

    async remove(id:string){
        const order = await this.respository.findBy({ id });
        return this.respository.softRemove(order);
    }
    
}