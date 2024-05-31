import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { OrderDto } from '../dto/order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  async findAll() {
    return this.ordersService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = this.ordersService.findOne(id);
    return {
      data: data,
      message: 'Orden Encontrada',
    };
  }

  @Post('')
  async create(@Body() payload: OrderDto) {
    const serviceResponse = await this.ordersService.create(payload);
    return {
      data: serviceResponse,
      message: 'Orden creada',
    };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const serviceResponse = await this.ordersService.remove(id);
    return {
      data: serviceResponse,
      message: 'Orden Eliminada',
    };
  }

  /* @Put(':id')
  async update(@Param('id') id:string, @Body() payload:UpdateOrderDto){
      const updatedUser = await this.ordersService.update(id,payload)
      return{
          data:updatedUser,
          message:'Usuario actualizado'
      }
  } */
}
