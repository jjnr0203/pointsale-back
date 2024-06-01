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
    comment: 'Fecha de creacion del registro',
  })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Fecha de eliminacion del registro',
  })
  deletedAt: Date;
  
  @Column({
    name: 'identification',
    type: 'varchar',
    comment: 'Número de cédula',
  })
  identification: string;

  @Column({
    name: 'name',
    type: 'varchar',
    comment: 'Nombre del cliente',
  })
  name: string;

  @Column({
    name: 'phone',
    type: 'numeric',
    comment: 'Número de télefono',
  })
  phone: string;

  @Column({
    name: 'address',
    type: 'varchar',
    comment: 'Dirrección del domicilio',
  })
  address: string;

  @Column({
    name: 'email',
    type: 'varchar',
    comment: 'Dirreción del correo electronico',
  })
  email: string;
}
