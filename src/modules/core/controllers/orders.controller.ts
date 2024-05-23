import { Body, Delete, Get, Param, Post } from "@nestjs/common";
import { OrdersService } from "../services/orders.service";
import { OrderDto } from "../dto/order.dto";

export class OrderController{
    constructor(private ordersService: OrdersService) {}
    
    @Get()
  async findAll() {
    return this.ordersService.finAll();
  }

    @Get(':id')
  async findOne(@Param('id') id:string) {
    const data =this.ordersService.findOne(id);
    return{
        date: Date,
        message: 'Orden Encontrada'
    }
}
@Post()
async create(@Body()payload:OrderDto) {
    const serviceResponse = await this.ordersService.create(payload);
    return {
        data: serviceResponse,
        message: 'Orden creada'
    }
}

@Delete(':id')
async delete(@Param('id') id: string) {
    const serviceResponse = await this.ordersService.remove(id)
    return {
        data: serviceResponse,
        message: 'Usuario eliminado'
    }
}
}