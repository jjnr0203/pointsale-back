import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { CatalogueEntity } from "./catalogue.entity";

@Entity('products', {
  schema: 'core',
})
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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

  @Column({ name: 'catalogue_id', type: 'uuid' })
  @ManyToOne(() => CatalogueEntity)
  @JoinColumn({ name: 'catalogue_id', referencedColumnName: 'id' })
  catalogueId: string;
}
