import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers', {
  schema: 'core',
})
export class CustomerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'customerName',
    type: 'varchar',
  })
  customerName: string;

  @Column({
    name: 'phone',
    type: 'numeric',
  })
  contactName: string;

  @Column({
    name: 'address',
    type: 'varchar',
  })
  address: string;

  @Column({
    name: 'email',
    type: 'varchar',
  })
  email: string;
}
