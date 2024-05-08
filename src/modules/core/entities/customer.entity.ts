import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('customers', {
  schema: 'core',
})
export class CustomerEntity {
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
