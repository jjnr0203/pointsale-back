import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  DeleteDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { CatalogueEntity } from './catalogue.entity';
import { ShopEntity } from './shop.entity';

@Entity('products', {
  schema: 'core',
})
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    comment: 'Fecha de la creación',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
  
  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Registro del borrado',
  })
  deletedAt: Date;

  @Column({
    name: 'name',
    type: 'varchar',
    comment: 'Nombre del producto',
  })
  name: string;
  
  @Column({
    name: 'unit',
    type: 'numeric',
    comment: 'Unidad del producto',
  })
  unit: number;
  
  @Column({
    name: 'price',
    type: 'numeric',
    comment: 'Precio del producto',
  })
  price: number;
  
  @Column({
    name: 'cost',
    type: 'numeric',
    comment: 'Costo del producto',
  })
  cost: number;

  @ManyToOne(() => CatalogueEntity, { nullable: true })
  @JoinColumn({ name: 'catalogue_id', referencedColumnName: 'id', foreignKeyConstraintName:'product_catalogue_id_foreign_key'})
  catalogueId: string;

  @ManyToMany(() => ShopEntity, (shop) => shop.products)
  @JoinTable({
      name:'product_shop',
      joinColumn:{name:'product_id'},
      inverseJoinColumn:{name:'shop_id'}
    })
    shops: ShopEntity[]
}
