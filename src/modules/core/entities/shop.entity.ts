import { UserEntity } from 'src/modules/auth/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity('shops', { schema: 'core' })
export class ShopEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'ruc', type: 'varchar' })
  ruc: string;

  @Column({ name: 'address', type: 'varchar' })
  address: string;

  @Column({ name: 'phone', type: 'varchar' })
  phone: string;

  @Column({ name: 'email', type: 'varchar' })
  email: string;

  @ManyToMany(() => ProductEntity)
  @JoinTable({
    name: 'products_shops',
    joinColumn: {
      name: 'shop_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'product_id',
      referencedColumnName: 'id',
    },
  })
  products: ProductEntity[];

  @ManyToOne(() => UserEntity, { nullable: false })
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
  user: UserEntity;
}
