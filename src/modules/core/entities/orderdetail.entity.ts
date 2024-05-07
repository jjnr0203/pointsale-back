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

  @Column({ name: 'order_id', type: 'uuid', nullable: false })
  @ManyToOne(() => OrderEntity)
  @JoinColumn({ name: 'order_id', referencedColumnName: 'id' })
  order: OrderEntity;

  @Column({ name: 'product_id', type: 'uuid', nullable: false })
  @ManyToOne(() => ProductEntity)
  @JoinColumn({ name: 'product_id', referencedColumnName: 'id' })
  product: ProductEntity;
}
