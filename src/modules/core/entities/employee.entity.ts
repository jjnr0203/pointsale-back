import { UserEntity } from 'src/modules/auth/entities/user.entity';
import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ShopEntity } from './shop.entity';

@Entity('employees', { schema: 'core' })
export class EmployeeEntity {
  @PrimaryGeneratedColumn('uuid', {comment: "Identificador del empleado"})
  id: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    comment: 'Creacion',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
    comment: 'Registro de borrado'
  })
  deleteAt: Date;

  @OneToOne(() => UserEntity)
  @JoinColumn({ name: 'user_id', referencedColumnName: 'id', foreignKeyConstraintName: 'employe_user_id_foreingn_key' })
  userId: string;

  @ManyToOne(() => ShopEntity, { nullable: false })
  @JoinColumn({ name: 'shop_id', referencedColumnName: 'id', foreignKeyConstraintName: 'employes_shop_id_foreign_key'})
  shop: ShopEntity;

}
