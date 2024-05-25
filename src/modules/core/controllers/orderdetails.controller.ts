import { Body, Delete, Get, Param, Post } from "@nestjs/common";
import { OrderDetailsService } from "../services/orderdetails.service";
import { OrderDetailDto } from "../dto/order-detail.dto";


export class OrderDetailController{
    constructor(private orderDetailsService: OrderDetailsService) {}

    @Get()
  async findAll() {
    return this.orderDetailsService.finAll();
  }

  @Get(':id')
  async findOne(@Param('id') id:string) {
    const data =this.orderDetailsService.findOne(id);
    return{
        date: Date,
        message: 'Detalle de la orden encontrada'
    }
}

@Post()
async create(@Body()payload:OrderDetailDto) {
    const serviceResponse = await this.orderDetailsService.create(payload);
    return {
        data: serviceResponse,
        message: 'Detalle de orden creada'
    }
}

@Delete(':id')
async delete(@Param('id') id: string) {
    const serviceResponse = await this.orderDetailsService.remove(id)
    return {
        data: serviceResponse,
        message: 'Detalle de orden eliminada'
    }
}
}