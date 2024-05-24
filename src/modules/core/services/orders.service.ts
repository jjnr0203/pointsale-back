import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { Not, Repository } from "typeorm";
import { OrderEntity } from "../entities/order.entity";
import { OrderDto } from "../dto/order.dto";
import { UpdateOrderDto } from "../dto/update-order.dto";

@Injectable()
export class OrdersService {
    constructor(
        @Inject('ORDERS_REPOSITORY')
        private repository: Repository<OrderEntity>
    ){}

    async findAll(){
        return await this.repository.find()
    }

    async findOne (id:string){
        const order = await this.repository.findOne({where: {id},
        });
        if(!order){
            throw new NotFoundException ('Orden no encontrada')
        }
        return order;
    }

    async create(orderDto:OrderDto){
        return this.repository.create(orderDto)
    }

    async update(id:string, orderDto:UpdateOrderDto){
        const order = await this.repository.findBy({ id });
        if(!order){
            throw new NotFoundException('No se encontro la order')
        }
        return this.repository.update(id, orderDto);
    }

    async remove(id:string){
        const order = await this.repository.findBy({id});
        return this.repository.softRemove(order);
    }

}