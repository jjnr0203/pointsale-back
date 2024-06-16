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
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ShipperEntity } from './shipper.entity';
import { ShopEntity } from './shop.entity';
import { ProductEntity } from './product.entity';
import { UserEntity } from 'src/modules/auth/entities/user.entity';

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
    name: 'supplier_name',
    type: 'varchar',
    comment: 'Nombre del proveedor',
  })
  name: string;

  @Column({
    name: 'phone',
    type: 'varchar',
    comment: 'Numero celular del proveedor',
  })
  phone: string;

  @Column({
    name: 'contact_email',
    type: 'varchar',
    comment: 'Correo del proveedor',
  })
  email: string;

  @ManyToOne(() => ShipperEntity, { nullable: false })
  @JoinColumn({
    name: 'shipper_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'suppliers_shipper_id_foreign_key',
  })
  shipper: ShipperEntity;

  @OneToOne(() => UserEntity)
  @JoinColumn({
    name: 'user_id',
    referencedColumnName: 'id',
    foreignKeyConstraintName: 'suppliers_user_id_foreign_key',
  })
  user: string;

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
