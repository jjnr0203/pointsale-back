import { Entity, PrimaryColumn, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('products',{
    schema: 'core',
})
  export class ProductEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

      @Column({
        name: 'productname',
        type: 'varchar',
      })
      productname: string;

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