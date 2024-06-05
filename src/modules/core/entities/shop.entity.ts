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
    comment: 'Fecha de creacion',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Registro del borrado'
  })
  deletedAt: Date;

  @Column({ 
    name: 'name', 
    type: 'varchar',
    comment: 'Nombre de la tienda'
  })
  name: string;

  @Column({
     name: 'ruc', 
     type: 'varchar', 
     comment: 'Ruc de la tienda'
    })
  ruc: string;

  @Column({ 
    name: 'address', 
    type: 'varchar',
    comment: 'Direccion de la tienda'
  })
  address: string;

  @Column({ 
    name: 'phone', 
    type: 'varchar', 
    comment: 'Numero de celular de la tienda'
  })
  phone: string;

  @Column({ 
    name: 'email', 
    type: 'varchar',
    unique: true,
    comment: 'Email de la tienda'
  })
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
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id'  })
  user: UserEntity;
}
