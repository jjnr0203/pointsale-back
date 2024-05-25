import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { OrderdetailEntity } from './order-detail.entity';
import { CatalogueEntity } from './catalogue.entity';
import { ShopEntity } from './shop.entity';

@Entity('orders', { schema: 'core' })
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
  })
  deletedAt: Date;

  @ManyToOne(() => CatalogueEntity, { nullable: false })
  @JoinColumn({ name: 'payment_id', referencedColumnName: 'id' })
  paymentMethod: CatalogueEntity;


  @ManyToOne(() => ShopEntity, { nullable: false })
  @JoinColumn({ name: 'shop_id', referencedColumnName: 'id' })
  shopId: CustomerEntity;

  @ManyToOne(() => CustomerEntity, { nullable: false })
  @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
  customerId: CustomerEntity;

  @OneToMany(()=>OrderdetailEntity, orderDetail => orderDetail.order)
  orderDetails:OrderdetailEntity[]
}
