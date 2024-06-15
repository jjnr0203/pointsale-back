import { HttpException, HttpStatus, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Not, Repository } from 'typeorm';
import { OrderEntity } from '../entities/order.entity';
import { OrderDto } from '../dto/order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';
import { CoreEnum } from 'src/modules/enums/providers.enum';
import { OrderDetailEntity } from '../entities/order-detail.entity';

@Injectable()
export class OrdersService {
  constructor(
    @Inject(CoreEnum.ORDER_REPOSITORY)
    private repository: Repository<OrderEntity>,
    @Inject(CoreEnum.ORDER_DETAIL_REPOSITORY)
    private orderDetailRepository: Repository<OrderDetailEntity>,
  ) {}

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    const order = await this.repository.findOne({ where: { id } });
    if (!order) {
      throw new NotFoundException('Orden no encontrada');
    }
    return order;
  }

  async create(orderDto: OrderDto) {
    try {
      const { ordersDetails, ...rest } = orderDto;
      const newOrder = this.repository.create(rest);
      await this.repository.save(newOrder);

      for (const item of ordersDetails) {
        item.order = newOrder;
        const newOrderDetail = this.orderDetailRepository.create(item);
        await this.orderDetailRepository.save(newOrderDetail);
      }
      return newOrder;
    } catch (error) {
      console.error(error);
      throw new HttpException('Error al realizar la venta', HttpStatus.BAD_REQUEST);
    }
  }
  
  async update(id: string, orderDto: UpdateOrderDto) {
    const order = await this.repository.findBy({ id });
    if (!order) {
      throw new NotFoundException('No se encontro la order');
    }
    return this.repository.update(id, orderDto);
  }

  async remove(id: string) {
    const deletedOrder = await this.repository.softDelete(id);
    return deletedOrder
  }
}
