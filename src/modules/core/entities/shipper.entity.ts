import { UserEntity } from "src/modules/auth/entities/user.entity";
import { CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('shippers',{schema: 'core'})
export class ShipperEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn ({
        name: 'create_at',
        type: 'timestamp',
        comment:'Fecha de la creación',
        default:()=> 'CURRENT_TIMESTAMP', 
    })
    create_at: Date;
    
    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
        comment:'Registro del borrado',
    })
    delete_at: Date;   

    @OneToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id', foreignKeyConstraintName:'shipper_user_id_foreign_key' })
    user: string;

}