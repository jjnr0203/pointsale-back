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
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
  })
  deletedAt: Date;

  @Column({
    name: 'name',
    type: 'varchar',
  })
  name: string;

  @Column({
    name: 'unit',
    type: 'numeric',
  })
  unit: number;

  @Column({
    name: 'price',
    type: 'numeric',
  })
  price: number;

  @Column({
    name: 'cost',
    type: 'numeric',
  })
  cost: number;

  @ManyToOne(() => CatalogueEntity, { nullable: false })
  @JoinColumn({ name: 'catalogue_id', referencedColumnName: 'id' })
  catalogueId: string;
}
