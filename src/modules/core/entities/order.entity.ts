import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

@Entity('orders', {
  schema: 'core',
})
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
}
