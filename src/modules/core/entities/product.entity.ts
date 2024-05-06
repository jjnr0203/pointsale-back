import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
