import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  Column,
} from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { OrderDetailEntity } from './order-detail.entity';
import { CatalogueEntity } from './catalogue.entity';
import { ShopEntity } from './shop.entity';

@Entity('orders', { schema: 'core' })
export class OrderEntity {
  @PrimaryGeneratedColumn('uuid', {comment:'Identificador único de la orden'})
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    comment: 'Fecha de creación',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Registro de borrado'
  })
  deletedAt: Date;


  @ManyToOne(() => CatalogueEntity)
  @JoinColumn({ name: 'payment_id', referencedColumnName: 'id'})
  paymentMethod: CatalogueEntity;

  @Column({name:'cash', type:'float', comment:'Dinero recibido en efectivo', nullable:true})
  cash:number

  @Column({name:'cashback', type:'float', comment:'Dinero de cambio al cliente', nullable:true})
  cashBack

  @ManyToOne(() => ShopEntity, {nullable:false})
  @JoinColumn({ name: 'shop_id', referencedColumnName: 'id' })
  shop: ShopEntity;

  @ManyToOne(() => CustomerEntity)
  @JoinColumn({ name: 'customer_id', referencedColumnName: 'id' })
  customer: CustomerEntity;

  @OneToMany(()=>OrderDetailEntity, orderDetail => orderDetail.order)
  orderDetails:OrderDetailEntity[]
}
