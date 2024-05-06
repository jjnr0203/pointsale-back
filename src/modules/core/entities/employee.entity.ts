import { UserEntity } from "src/modules/auth/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ShopEntity } from "./shop.entity";

@Entity('employees', { schema: 'core' })
export class EmployeeEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt: Date

    @DeleteDateColumn({
        name: 'delete_at',
        type: 'timestamp',
    })
    deleteAt: Date


    @OneToOne(() => UserEntity)
    @JoinColumn({ name: 'user_id', referencedColumnName: 'id' })
    userId: string

    @Column({type:'uuid',name:'shop_id', nullable:false})
    @ManyToOne(()=> ShopEntity)
    @JoinColumn({name:'shop_id', referencedColumnName:'id'})
    shop:ShopEntity;
    
}