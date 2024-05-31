import {
  BeforeInsert, 
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { CatalogueEntity } from '../../core/entities/catalogue.entity';
import * as bcrypt from 'bcrypt';

@Entity('users', { schema: 'auth' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid', {comment:'Identificador único del usuario'})
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    comment: 'Fecha de creación',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    nullable: true,
    comment: 'Registro de borrado'
  })
  deletedAt: Date;

  @Column({ type: 'varchar', name: 'name', nullable: false, comment:'Nombre de usuario dentro de la aplicación' })
  name: string;

  @Column({ type: 'varchar', name: 'email', nullable: false, unique:true, comment:'Correo para autenticación' })
  email: string;

  @Column({ type: 'varchar', name: 'password', nullable: false, comment:'Clave para autenticación' })
  password: string;

  @BeforeInsert()
  async passwordEncrypt() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @ManyToOne(() => CatalogueEntity, { nullable: false })
  @JoinColumn({ name: 'role_id', referencedColumnName: 'id' })
  role: CatalogueEntity;
}