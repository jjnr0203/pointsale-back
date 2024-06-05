import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShipperEntity } from './shipper.entity';
import { ShopEntity } from './shop.entity';
import { ProductEntity } from './product.entity';

@Entity('supplier', { schema: 'core' })
export class SupplierEntity {
  @PrimaryGeneratedColumn('uuid')
  id: String;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
    comment: 'Fecha de la creación',
    default: () => 'CURRENT_TIMESTAMP',
  })
  create_at: Date;
  
  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
    comment: 'Registro del borrado',
  })
  delete_at: Date;
  
  @Column({
    name: 'shipperName',
    type: 'varchar',
    comment: 'Nombre del cargador',
  })
  name: string;
  
  @Column({
    name: 'phone',
    type: 'varchar',
    comment: 'Numero celular del cargador',
  })
  phone: string;
  
  @Column({
    name: 'email',
    type: 'varchar',
    comment: 'Correo del cargador',
  })
  email: string;

  @ManyToOne(() => ShipperEntity, { nullable: false })
  @JoinColumn({ name: 'shipper_id', referencedColumnName: 'id', foreignKeyConstraintName:'suppliers_shipper_id_foreign_key'})
  shipper: ShipperEntity;

  @ManyToMany(() => ShopEntity)
  @JoinTable({
    name: 'supplier_shop',
    joinColumn: {
      name: 'shop_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'supplier_id',
      referencedColumnName: 'id',
    },
  })
  shops: ShopEntity[];
}
