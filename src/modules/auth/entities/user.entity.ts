import {
  BeforeInsert, BeforeUpdate,
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

  @Column({ type: 'varchar', name: 'name', nullable: false })
  name: string;

  @Column({ type: 'varchar', name: 'email', nullable: false, unique:true })
  email: string;

  @Column({ type: 'varchar', name: 'password', nullable: false })
  password: string;

  @BeforeInsert()
  async passwordEncrypt() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @ManyToOne(() => CatalogueEntity, { nullable: false })
  @JoinColumn({ name: 'role_id', referencedColumnName: 'id' })
  role: CatalogueEntity;
}