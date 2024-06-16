import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShopEntity } from './shop.entity';

@Entity('customers', {
  schema: 'core',
})
export class CustomerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    comment: 'Fecha de creacion del registro',
  })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Fecha de eliminacion del registro',
  })
  deletedAt: Date;
  
  @Column({
    name: 'identification',
    type: 'varchar',
    comment: 'Número de cédula',
  })
  identification: string;

  @Column({
    name: 'name',
    type: 'varchar',
    comment: 'Nombre del cliente',
  })
  name: string;

  @Column({
    name: 'phone',
    type: 'numeric',
    comment: 'Número de télefono',
  })
  phone: string;

  @Column({
    name: 'address',
    type: 'varchar',
    comment: 'Dirrección del domicilio',
  })
  address: string;

  @Column({
    name: 'email',
    type: 'varchar',
    comment: 'Dirreción del correo electronico',
  })
  email: string;

  

  @ManyToMany(() => ShopEntity, (shop) => shop.customers)
    @JoinTable({
      name:'customer_shop',
      joinColumn:{name:'customer_id'},
      inverseJoinColumn:{name:'shop_id'}
    })
    shops: ShopEntity[]
}

