import { UserEntity } from "src/modules/auth/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('shops',{schema:'core'})
export class ShopEntity{
    
    @PrimaryGeneratedColumn('uuid')
    id:string;

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

    @Column({name:'name',type:'varchar'})
    name:string

    @Column({name:'ruc',type:'varchar'})
    ruc:string

    @Column({name:'address',type:'varchar'})
    address:string

    @Column({name:'phone',type:'varchar'})
    phone:string
    
    @Column({name:'email',type:'varchar'})
    email:string

    @Column({name:'user_id',type:'uuid', nullable:false})
    @ManyToOne(()=>UserEntity)
    @JoinColumn({name:'user_id', referencedColumnName:'id'})
    user:UserEntity

}