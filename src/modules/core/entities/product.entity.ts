import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { CatalogueEntity } from './catalogue.entity';

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
  @JoinColumn({ name: 'catalogue_id', referencedColumnName: 'id'})
  catalogueId: string;
}
