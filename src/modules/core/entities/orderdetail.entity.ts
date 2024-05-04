import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orderdetails', {
  schema: 'core',
})
export class OrderdetailEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'quantity',
    type: 'numeric',
  })
  quantity: number;
}
