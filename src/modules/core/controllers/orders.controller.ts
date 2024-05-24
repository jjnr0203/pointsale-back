import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { OrdersService } from '../services/orders.service';
import { OrderDto } from '../dto/order.dto';

@Controller('orders')
export class OrderController {
  constructor(private ordersService: OrdersService) {}

  @Get()
  async findAll() {
    return await this.ordersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.ordersService.findOne(id);
    return {
      data: data,
      message: 'Orden Encontrada',
    };
  }
  @Post()
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
      message: 'Usuario eliminado',
    };
  }
}
