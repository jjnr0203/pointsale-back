import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderEntity } from './order.entity';
import { ProductEntity } from './product.entity';

@Entity('orderdetails', {
  schema: 'core',
})
export class OrderdetailEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'quantity',
    type: 'numeric',
  })
  quantity: number;

  @ManyToOne(() => OrderEntity, { nullable: false })
  @JoinColumn({ name: 'order_id', referencedColumnName: 'id' })
  order: OrderEntity;

  @ManyToOne(() => ProductEntity, { nullable: false })
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: ProductEntity;
}
