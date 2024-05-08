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
import { OrderdetailEntity } from './orderdetail.entity';

@Entity('orders', { schema: 'core' })
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
  })
  createAt: Date;

  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
  })
  updateAt: Date;

  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
  })
  deleteAt: Date;

  @Column({
    name: 'payment_method',
    type: 'varchar',
  })
  paymentMethod: string;

  @Column({
    name: 'total',
    type: 'numeric',
    scale: 2,
  })
  total: 'number';

  @ManyToOne(() => CustomerEntity, { nullable: false })
  @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
  customerId: CustomerEntity;

  @OneToMany(()=>OrderdetailEntity, orderDetail => orderDetail.order)
  orderDetails:OrderdetailEntity[]

}
