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
    name: 'contactName',
    type: 'numeric',
  })
  contactName: string;

  @Column({
    name: 'address',
    type: 'varchar',
  })
  address: string;

  @Column({
    name: 'city',
    type: 'varchar',
  })
  city: string;

  @Column({
    name: 'postalCode',
    type: 'numeric',
  })
  postalCode: string;

  @Column({
    name: 'country',
    type: 'varchar',
  })
  country: string;
}
